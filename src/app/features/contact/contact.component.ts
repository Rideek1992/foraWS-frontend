import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LabelComponent } from '../../shared/uploadComponents/formComponents/label/label.component';
import { CommonModule } from '@angular/common';
import { ApibackandService } from '../../core/apibackand.service';
import { ContactContentComponent } from '../../shared/components/contact-content/contact-content.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, LabelComponent, CommonModule, ContactContentComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass',
})
export class ContactComponent {
  constructor(
    // eslint-disable-next-line @angular-eslint/prefer-inject
    private fb: FormBuilder,
    // eslint-disable-next-line @angular-eslint/prefer-inject
    private api: ApibackandService,
  ) {}

  optionContact = [
    'email',
    'telefon',
    'whatsup',
    'teams',
    'google meet',
    'spotkanie' + '  na miejscu',
    'inny',
  ];
  optionsCompanySize: string[] = ['1-10', '11-50', '51-100', '101-500', '501 +'];
  optionsCompanyTopic: any[] = [
    { prefix: 'PG', name: 'projekt graficzny' },
    { prefix: 'ZM', name: 'znakowanie magazynu' },
    { prefix: 'OR', name: 'odzież robocza' },
    { prefix: 'TB', name: 'tabliczki' },
    { prefix: 'UD', name: 'usługi dronowe' },
    { prefix: 'SW', name: 'strona www' },
    { prefix: 'AD', name: 'analiza danych' },
    { prefix: 'IN', name: 'inne' },
  ];
  optionsCompanyIndustry: string[] = [
    'logistyka',
    'produkcja',
    'magazyn',
    'parking',
    'sklep',
    'inne',
  ];

  sendForm = false;
  uniCodeElement = '';

  namePersonMessage: any = '';
  contactPersonMessage: any = '';

  consentVersion: any = '';

  contactForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null],
    emailAddress: [null, [Validators.required, Validators.email]],
    phoneNumber: [null],
    preferredContact: ['email'],
    position: [null],
    nameCompany: [null],
    country: [null],
    region: [null],
    city: [null],
    postCode: [null],
    industry: [null],
    companySize: [null],
    message: [null, Validators.required],
    conversationElement: [null, Validators.required],
    informationCode: [null],
    consent_contact_given: [false, Validators.requiredTrue],
    consent_contact_version: [null],
    consent_contact_given_at: [null],
    consent_contact_ip: [null],
    consent_contact_user_agent: [null],
  });

  dataElement: unknown = {};

  submit(): void {
    if (!this.contactForm.valid) {
      console.log('błąd wysyłania');
      return;
    }

    this.contactForm.markAllAsTouched();
    this.generateUniCode(this.contactForm.value.conversationElement);

    // 🔥 NAJPIERW pobieramy aktywną wersję polityki
    this.api.getPrivatyPolicy().subscribe({
      next: (res) => {
        const activeVersion = res.data?.[0]?.version ?? '1.0';

        // 🔥 ustawiamy wersję w formularzu
        this.contactForm.patchValue({
          consent_contact_version: activeVersion,
        });

        // 🔥 TERAZ budujemy payload (po ustawieniu wersji!)
        const dataElement = {
          data: {
            ContactInfo: {
              firstName: this.contactForm.value.firstName,
              lastName: this.contactForm.value.lastName,
              emailAddress: this.contactForm.value.emailAddress,
              phoneNumber: this.contactForm.value.phoneNumber,
              preferredContact: this.contactForm.value.preferredContact,
              position: this.contactForm.value.position,
            },
            CompanyInfo: {
              nameCompany: this.contactForm.value.nameCompany,
              country: this.contactForm.value.country,
              region: this.contactForm.value.region,
              city: this.contactForm.value.city,
              postCode: this.contactForm.value.postCode,
              industry: this.contactForm.value.industry,
              companySize: this.contactForm.value.companySize,
            },
            RequestInfo: {
              message: this.contactForm.value.message,
              conversationElement: this.contactForm.value.conversationElement,
            },
            informationCode: this.uniCodeElement,
            Consents: {
              consent_contact_given: this.contactForm.value.consent_contact_given,
              consent_contact_version: activeVersion,
            },
          },
        };

        // 🔥 WYSYŁKA DOPIERO TERAZ
        this.api.sendContactForm(dataElement).subscribe({
          next: (res) => {
            const entryID = res?.data?.documentId;

            this.api.informationBackendMail(entryID).subscribe({
              next: () => {
                console.log('formualrz wysłany');
              },
              error: (err) => console.log(err),
            });

            this.sendForm = true;
            this.namePersonMessage = this.contactForm.value.firstName;
            this.contactPersonMessage = this.contactForm.value.preferredContact;

            this.contactForm.reset({});
          },
          error: (err) => console.log(err),
        });
      },
      error: (err) => console.log(err),
    });
  }

  generateUniCode(topic: any) {
    this.optionsCompanyTopic.forEach((item) => {
      const datePrefix = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      const random = Math.random().toString(36).substring(2, 7).toUpperCase();
      if (item.name === topic) {
        this.uniCodeElement = `${item.prefix}.${datePrefix}.${random}`;
      }
    });
  }

  closeForm() {
    this.sendForm = false;
  }
}

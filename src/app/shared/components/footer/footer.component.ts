import { Component, Input } from '@angular/core';
import { LinkMenuComponent } from '../../uploadComponents/link-menu/link-menu.component';
import { FooterLinkComponent } from '../../uploadComponents/footer-link/footer-link.component';
import { enviroment } from '../../../../envirpments/enviroment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LinkMenuComponent, FooterLinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass',
})
export class FooterComponent {
  year = new Date().getFullYear();

  emailAddres = enviroment.email;
  phoneNumber = enviroment.phoneNumber;
}

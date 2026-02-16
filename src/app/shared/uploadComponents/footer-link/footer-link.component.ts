import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { enviroment } from '../../../../envirpments/enviroment';

@Component({
  selector: 'app-footer-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-link.component.html',
  styleUrl: './footer-link.component.sass',
})
export class FooterLinkComponent implements OnInit {
  @Input() name?: string;
  @Input() link?: string;
  @Input() active? = true;

  activeLinkt = '';

  emailaddress = enviroment.email;
  phoneNumber = enviroment.phoneNumber;

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(public router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLinkt = event.urlAfterRedirects;
        console.log(this.activeLinkt);
      }
    });
  }
}

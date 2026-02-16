import { Component } from '@angular/core';
import { MainElementComponent } from '../main-element/main-element.component';
import { MenuComponentComponent } from '../menu-component/menu-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [MainElementComponent, MenuComponentComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.sass',
})
export class MainHeaderComponent {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private router: Router) {}
  clickButton() {
    this.router.navigate(['/contact']);
  }
}

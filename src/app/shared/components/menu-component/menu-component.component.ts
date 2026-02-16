import { Component } from '@angular/core';
import { ButtonMenuSquareComponent } from '../../uploadComponents/button-menu-square/button-menu-square.component';
import { LinkMenuComponent } from '../../uploadComponents/link-menu/link-menu.component';

@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [ButtonMenuSquareComponent, LinkMenuComponent],
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.sass',
})
export class MenuComponentComponent {}

import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-menu-square',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button-menu-square.component.html',
  styleUrl: './button-menu-square.component.sass',
})
export class ButtonMenuSquareComponent {
  @Input() namefa?: string;
  @Input() text?: string;
  @Input() link?: string;
}

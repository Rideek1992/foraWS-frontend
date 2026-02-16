import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.sass',
})
export class IconButtonComponent {
  @Input() icon?: string;
  @Input() text?: string;
  @Input() description?: string;
}

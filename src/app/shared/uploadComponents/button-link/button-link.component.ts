import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-link',
  standalone: true,
  imports: [],
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.sass'
})
export class ButtonLinkComponent {

  @Input() link!: string;
  @Input() name!: string;
  @Input() color?: string;
  @Input() icon?: string;
  @Input() type?: string;
  @Input() fragment?: string;

}

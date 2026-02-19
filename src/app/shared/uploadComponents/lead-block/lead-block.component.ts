import {Component, input, Input} from '@angular/core';

@Component({
  selector: 'app-lead-block',
  standalone: true,
  imports: [],
  templateUrl: './lead-block.component.html',
  styleUrl: './lead-block.component.sass'
})
export class LeadBlockComponent {

  @Input() leadText?: string;
  @Input() leadTitle?: string;
  @Input() leadIcon?: string;
  @Input() leadColor!: number;

}

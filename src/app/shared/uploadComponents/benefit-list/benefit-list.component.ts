import {Component, Input} from '@angular/core';
import {JsonPipe, NgClass} from "@angular/common";
import {MarkdownComponent} from "ngx-markdown";

@Component({
  selector: 'app-benefit-list',
  standalone: true,
  imports: [
    JsonPipe,
    MarkdownComponent,
    NgClass
  ],
  templateUrl: './benefit-list.component.html',
  styleUrl: './benefit-list.component.sass'
})
export class BenefitListComponent {


  @Input() dataBenefits: any;
  @Input() index?: number;

  protected readonly Number = Number;
}

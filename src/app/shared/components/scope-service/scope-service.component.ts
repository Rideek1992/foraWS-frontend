import {Component, Input} from '@angular/core';
import {MarkdownComponent} from "ngx-markdown";
import {enviroment} from "../../../../envirpments/enviroment";
import {JsonPipe, NgStyle} from "@angular/common";

@Component({
  selector: 'app-scope-service',
  standalone: true,
  imports: [
    MarkdownComponent,
    NgStyle,
    JsonPipe
  ],
  templateUrl: './scope-service.component.html',
  styleUrl: './scope-service.component.sass'
})
export class ScopeServiceComponent {

  adressURL:string = enviroment.apiUrl

  @Input() data?:any
  @Input() isReverse?:boolean = false

}

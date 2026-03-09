import {Component, OnInit} from '@angular/core';
import {HeroComponent} from "../../shared/components/hero/hero.component";
import {ApibackandService} from "../../core/apibackand.service";
import {
  ScopeServiceComponent
} from "../../shared/components/scope-service/scope-service.component";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-print-companies',
  standalone: true,
  imports: [
    HeroComponent,
    ScopeServiceComponent,
    JsonPipe
  ],
  templateUrl: './print-companies.component.html',
  styleUrl: './print-companies.component.sass'
})
export class PrintCompaniesComponent implements OnInit{

  constructor(private api: ApibackandService){}

  elementPrint:any =[]

  pageName:string = 'print-companes'

  ngOnInit() {
    this.api.getGraphicElements(this.pageName).subscribe({
      next: (data) => {
        this.elementPrint = data.data
        console.log(data.data)
      },
      error: (err) => {
        console.log(err.error.message)}
    })
  }


}

import {Component, OnInit} from '@angular/core';
import {HeroComponent} from "../../shared/components/hero/hero.component";
import {ApibackandService} from "../../core/apibackand.service";
import {
  ScopeServiceComponent
} from "../../shared/components/scope-service/scope-service.component";
import {JsonPipe, NgClass, NgStyle} from "@angular/common";

import {enviroment} from "../../../envirpments/enviroment";
import {
  ButtonLinkComponent
} from "../../shared/uploadComponents/button-link/button-link.component";

@Component({
  selector: 'app-print-companies',
  standalone: true,
  imports: [
    HeroComponent,
    ScopeServiceComponent,
    JsonPipe,
    NgClass,
    NgStyle,
    ButtonLinkComponent
  ],
  templateUrl: './print-companies.component.html',
  styleUrl: './print-companies.component.sass'
})
export class PrintCompaniesComponent implements OnInit{

  constructor(private api: ApibackandService){}

  elementPrint:any =[]
  elementProfits:any =[]
  elementApplications:any =[]
  urlAddres:string = enviroment.apiUrl
  activeIndex:number = -1
  activeExample:string = ''



  pageName:string = 'print-companes'

  ngOnInit() {
    this.api.getGraphicElements(this.pageName).subscribe({
      next: (data) => {
        this.elementPrint = data.data
      },
      error: (err) => {
        console.log(err.error.message)}
    })
    this.api.getSiteMarkingWarehouse('print_companes').subscribe({
      next: (data) => {
        this.elementProfits = data.data.map((item:any) => item.print_companes)
      },
      error: (err) => {error: (err.error.message)}
    })
    this.api.getSiteMarkingWarehouse('application_example').subscribe({
      next: (data) => {
        this.elementApplications = data.data.map((item:any) => item.application_example)
      },
      error: (err) => {
        console.log(err.error.message)
      }
      }
    )
  }

  changeIndex(index:number){
    if(this.activeIndex === index) {
      this.activeIndex = -1
      return
    }
    this.activeIndex = index
  }




}

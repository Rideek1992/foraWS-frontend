import {Component, OnInit} from '@angular/core';
import {HeroComponent} from "../../shared/components/hero/hero.component";
import {ApibackandService} from "../../core/apibackand.service";
import {
  ScopeServiceComponent
} from "../../shared/components/scope-service/scope-service.component";
import {JsonPipe, NgClass} from "@angular/common";

@Component({
  selector: 'app-print-companies',
  standalone: true,
  imports: [
    HeroComponent,
    ScopeServiceComponent,
    JsonPipe,
    NgClass
  ],
  templateUrl: './print-companies.component.html',
  styleUrl: './print-companies.component.sass'
})
export class PrintCompaniesComponent implements OnInit{

  constructor(private api: ApibackandService){}

  elementPrint:any =[]
  elementProfits:any =[]
  activeIndex:number = -1


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
        console.log(this.elementProfits)
      },
      error: (err) => {error: (err.error.message)}
    })
  }

  changeIndex(index:number){
    if(this.activeIndex === index) {
      this.activeIndex = -1
      return
    }
    this.activeIndex = index

  }


}

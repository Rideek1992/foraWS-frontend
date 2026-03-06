import { Component, OnInit } from '@angular/core';
import {HeroComponent} from "../../shared/components/hero/hero.component";
import { ApibackandService} from "../../core/apibackand.service";
import {
  ScopeServiceComponent
} from "../../shared/components/scope-service/scope-service.component";
import {JsonPipe} from "@angular/common";
import {
  BenefitListComponent
} from "../../shared/uploadComponents/benefit-list/benefit-list.component";

@Component({
  selector: 'app-marking-warehouse',
  standalone: true,
  imports: [
    HeroComponent,
    ScopeServiceComponent,
    JsonPipe,
    BenefitListComponent
  ],
  templateUrl: './marking-warehouse.component.html',
  styleUrl: './marking-warehouse.component.sass'
})
export class MarkingWarehouseComponent implements OnInit {

  constructor(private api: ApibackandService){}
  pageName:string = 'marking-warehouse'

  dataElements:any =[]
  benefitnsList:any =[]
  dataForWho:any = []


  ngOnInit(){
    this.api.getGraphicElements(this.pageName).subscribe({
      next: (data) => {
        this.dataElements = data.data
      },
      error: (err) => {
        console.log(err.error.message)}
    }
    )

    this.api.getSiteMarkingWarehouse('benefit_lists').subscribe({
      next: (data) => {
        this.benefitnsList = data.data.map((item:any) => item.benefit_lists)
      },
      error: (err) => {
        console.log(err.error.message)
      }
    })

    this.api.getSiteMarkingWarehouse('for_who').subscribe({
      next: (data) => {
        this.dataForWho = data.data.map((item:any) => item.for_who)
        console.log(this.dataForWho)
      },
      error: (err) => {
        console.log(err.error.message)
      }
    })
  }

}

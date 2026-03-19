import {Component, OnInit} from '@angular/core';
import {HeroComponent} from "../../shared/components/hero/hero.component";
import {ApibackandService} from "../../core/apibackand.service";
import {
  ScopeServiceComponent
} from "../../shared/components/scope-service/scope-service.component";
import {
  ButtonLinkComponent
} from "../../shared/uploadComponents/button-link/button-link.component";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-data-analysis',
  standalone: true,
  imports: [
    HeroComponent,
    ScopeServiceComponent,
    ButtonLinkComponent,
    JsonPipe
  ],
  templateUrl: './data-analysis.component.html',
  styleUrl: './data-analysis.component.sass'
})
export class DataAnalysisComponent implements OnInit {



  constructor(private api: ApibackandService){}

  dataAnalitictScopec:any =[]
  dataAnaliticsWhyWe:any =[]

  ngOnInit() {
     this.api.getGraphicElements('data-analytics').subscribe({
       next: (data) => {
         this.dataAnalitictScopec = data.data
       },
       error: (err) =>{
         error: (err.error.message)
       }
     })

    this.api.getSiteMarkingWarehouse('analitics_why_we').subscribe({
      next: (data) =>{
        this.dataAnaliticsWhyWe = data.data.map((item:any) => item.analitics_why_we)
      },
      error: (err) =>{
        console.log(err.error.message)
      }
    })
  }
}

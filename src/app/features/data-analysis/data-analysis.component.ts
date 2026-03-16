import {Component, OnInit} from '@angular/core';
import {HeroComponent} from "../../shared/components/hero/hero.component";
import {ApibackandService} from "../../core/apibackand.service";
import {
  ScopeServiceComponent
} from "../../shared/components/scope-service/scope-service.component";

@Component({
  selector: 'app-data-analysis',
  standalone: true,
  imports: [
    HeroComponent,
    ScopeServiceComponent
  ],
  templateUrl: './data-analysis.component.html',
  styleUrl: './data-analysis.component.sass'
})
export class DataAnalysisComponent implements OnInit {



  constructor(private api: ApibackandService){}

  dataAnalitictScopec:any =[]

  ngOnInit() {
     this.api.getGraphicElements('data-analytics').subscribe({
       next: (data) => {
         this.dataAnalitictScopec = data.data
       },
       error: (err) =>{
         error: (err.error.message)
       }
     })
  }
}

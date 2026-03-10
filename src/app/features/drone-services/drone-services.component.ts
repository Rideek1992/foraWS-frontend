import {Component, OnInit} from '@angular/core';
import {HeroComponent} from "../../shared/components/hero/hero.component";
import {ApibackandService} from "../../core/apibackand.service";
import {
  ScopeServiceComponent
} from "../../shared/components/scope-service/scope-service.component";

@Component({
  selector: 'app-drone-services',
  standalone: true,
  imports: [
    HeroComponent,
    ScopeServiceComponent
  ],
  templateUrl: './drone-services.component.html',
  styleUrl: './drone-services.component.sass'
})
export class DroneServicesComponent implements OnInit{

  constructor(private api: ApibackandService)
  {}

  dataDrone:any =[]

  ngOnInit() {
    this.api.getGraphicElements('drone-services').subscribe({
      next: (data) => {
        this.dataDrone = data.data
        console.log(this.dataDrone)
      },
      error: (err) =>{
        error: (err.error.message)
      }
    })
  }

}

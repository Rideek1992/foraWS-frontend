import {Component, OnInit} from '@angular/core';
import {HeroComponent} from "../../shared/components/hero/hero.component";
import {ApibackandService} from "../../core/apibackand.service";
import {
  ScopeServiceComponent
} from "../../shared/components/scope-service/scope-service.component";
import {
  ButtonLinkComponent
} from "../../shared/uploadComponents/button-link/button-link.component";

@Component({
  selector: 'app-drone-services',
  standalone: true,
  imports: [
    HeroComponent,
    ScopeServiceComponent,
    ButtonLinkComponent
  ],
  templateUrl: './drone-services.component.html',
  styleUrl: './drone-services.component.sass'
})
export class DroneServicesComponent implements OnInit{

  constructor(private api: ApibackandService)
  {}

  dataDrone:any =[]
  droneApplicationArea:any =[]
  droneWhyWe:any =[]

  ngOnInit() {
    this.api.getGraphicElements('drone-services').subscribe({
      next: (data) => {
        this.dataDrone = data.data
      },
      error: (err) =>{
        error: (err.error.message)
      }
    })
    this.api.getSiteMarkingWarehouse('drone_application_area').subscribe({
      next: (data) =>{
        this.droneApplicationArea = data.data.map((item:any) => item.drone_application_area)
      },
      error: (err) =>{
        error: (err.error.message)
      }
    })
    this.api.getSiteMarkingWarehouse('drone_why_we').subscribe({
      next: (data) =>{
        this.droneWhyWe = data.data.map((item:any) => item.drone_why_we)
      },
      error: (err) =>{
        console.log(err.error.message)
      }
      }
    )
  }

}

import {Component, OnInit} from '@angular/core';
import {HeroComponent} from "../../shared/components/hero/hero.component";
import { ApibackandService} from "../../core/apibackand.service";
import {
  ScopeServiceComponent
} from "../../shared/components/scope-service/scope-service.component";

@Component({
  selector: 'app-graphics',
  standalone: true,
  imports: [
    HeroComponent,
    ScopeServiceComponent
  ],
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.sass'
})
export class GraphicsComponent implements OnInit {

  constructor(private api: ApibackandService){}

  dataElements:any =[]

  ngOnInit(){
    this.api.getGraphicElements().subscribe({
      next: (data) => {
        this.dataElements = data.data
      },
      error: (err) => {
        console.log(err.error.message)}
    })
  }

}

import {Component, OnInit} from '@angular/core';
import {HeroComponent} from "../../shared/components/hero/hero.component";
import { ApibackandService} from "../../core/apibackand.service";
import {
  ScopeServiceComponent
} from "../../shared/components/scope-service/scope-service.component";
import {
  ButtonLinkComponent
} from "../../shared/uploadComponents/button-link/button-link.component";

@Component({
  selector: 'app-graphics',
  standalone: true,
  imports: [
    HeroComponent,
    ScopeServiceComponent,
    ButtonLinkComponent
  ],
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.sass'
})
export class GraphicsComponent implements OnInit {

  constructor(private api: ApibackandService){}
  pageName:string = 'graphics'

  dataElements:any =[]

  ngOnInit(){
    this.api.getGraphicElements(this.pageName).subscribe({
      next: (data) => {
        this.dataElements = data.data
      },
      error: (err) => {
        console.log(err.error.message)}
    })
  }

}

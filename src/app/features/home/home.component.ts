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
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ScopeServiceComponent,
    ButtonLinkComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {

  constructor(private api: ApibackandService) { }

  dataForWhom:any =[]

  ngOnInit(): void {
    this.api.getGraphicElements('/').subscribe(
      {
        next: (data) => {
          this.dataForWhom = data.data
          console.log(this.dataForWhom)
        },
        error: (err) => {
          console.log(err.error.message)
        }
      }
    )
  }
}

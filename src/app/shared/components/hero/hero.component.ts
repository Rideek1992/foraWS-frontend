import {Component, OnInit} from '@angular/core';
import {
  ButtonMenuSquareComponent
} from "../../uploadComponents/button-menu-square/button-menu-square.component";
import {
  ButtonLinkComponent
} from "../../uploadComponents/button-link/button-link.component";
import { ApibackandService } from "../../../core/apibackand.service";
import { enviroment} from "../../../../envirpments/enviroment";
import {NgStyle} from "@angular/common";


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ButtonMenuSquareComponent,
    ButtonLinkComponent,
    NgStyle
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.sass'
})
export class HeroComponent implements OnInit {




  constructor (private api: ApibackandService)
  {}

  urlAddress:string = enviroment.apiUrl
  dataHero:any = []
  photosURS:string = ''

  ngOnInit() {
    this.api.getHeroComponentData(window.location.pathname.slice(1)).subscribe({
      next: (res:any) => {
        this.dataHero = res.data[0]
        this.photosURS = `${this.urlAddress}${this.dataHero.photos[0].url}`
        console.log(this.dataHero)
      },
        error: (err:any) => {
        console.error('Błąd:', err);
      }
    })
  }
}

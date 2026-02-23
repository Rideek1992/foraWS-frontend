import { Component } from '@angular/core';
import {HeroComponent} from "../../shared/components/hero/hero.component";

@Component({
  selector: 'app-graphics',
  standalone: true,
  imports: [
    HeroComponent
  ],
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.sass'
})
export class GraphicsComponent {

}

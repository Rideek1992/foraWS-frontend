import { Component } from '@angular/core';
import {HeroComponent} from "../../shared/components/hero/hero.component";

@Component({
  selector: 'app-drone-services',
  standalone: true,
  imports: [
    HeroComponent
  ],
  templateUrl: './drone-services.component.html',
  styleUrl: './drone-services.component.sass'
})
export class DroneServicesComponent {

}

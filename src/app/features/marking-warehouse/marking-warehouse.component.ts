import { Component } from '@angular/core';
import {HeroComponent} from "../../shared/components/hero/hero.component";

@Component({
  selector: 'app-marking-warehouse',
  standalone: true,
  imports: [
    HeroComponent
  ],
  templateUrl: './marking-warehouse.component.html',
  styleUrl: './marking-warehouse.component.sass'
})
export class MarkingWarehouseComponent {

}

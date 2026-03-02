import { Component, OnInit } from '@angular/core';
import {HeroComponent} from "../../shared/components/hero/hero.component";
import { ApibackandService} from "../../core/apibackand.service";
import {
  ScopeServiceComponent
} from "../../shared/components/scope-service/scope-service.component";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-marking-warehouse',
  standalone: true,
  imports: [
    HeroComponent,
    ScopeServiceComponent,
    JsonPipe
  ],
  templateUrl: './marking-warehouse.component.html',
  styleUrl: './marking-warehouse.component.sass'
})
export class MarkingWarehouseComponent implements OnInit {

  constructor(private api: ApibackandService){}
  pageName:string = 'marking-warehouse'

  dataElements:any =[]

  ngOnInit(){
    this.api.getGraphicElements(this.pageName).subscribe({
      next: (data) => {
        this.dataElements = data.data
      },
      error: (err) => {
        console.log(err.error.message)}
    }
    )
  }

}

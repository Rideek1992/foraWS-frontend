import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StageService} from "../../../core/stage.service";

@Component({
  selector: 'app-road-map-element',
  standalone: true,
  imports: [],
  templateUrl: './road-map-element.component.html',
  styleUrl: './road-map-element.component.sass',
})
export class RoadMapElementComponent {
  @Input() stage!: number;
  @Input() nameRoadMap?: string;
  @Input() descriptionRoadMap?: string;
  @Input() iconRoadMap?: string;



constructor(private stageService: StageService){}


}

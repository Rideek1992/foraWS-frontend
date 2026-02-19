import {Component, Input} from '@angular/core';
import { RoadMapElementComponent } from '../../uploadComponents/road-map-element/road-map-element.component';

@Component({
  selector: 'app-diagram-stages',
  standalone: true,
  imports: [RoadMapElementComponent],
  templateUrl: './diagram-stages.component.html',
  styleUrl: './diagram-stages.component.sass',
})
export class DiagramStagesComponent {

  @Input() stagesIsActive?: any;




}

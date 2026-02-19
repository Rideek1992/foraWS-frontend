import {Component, OnInit} from '@angular/core';
import { DiagramStagesComponent } from '../diagram-stages/diagram-stages.component';
import { StageService } from '../../../core/stage.service';
import {JsonPipe} from "@angular/common";
import {LeadBlockComponent} from "../../uploadComponents/lead-block/lead-block.component";

@Component({
  selector: 'app-contact-content',
  standalone: true,
  imports: [DiagramStagesComponent, JsonPipe, LeadBlockComponent],
  templateUrl: './contact-content.component.html',
  styleUrl: './contact-content.component.sass',
})
export class ContactContentComponent implements OnInit{

  constructor(private stageService: StageService){}

  activeStage = null
  datasetRoadMap :any= []



  ngOnInit(){
    this.stageService.stage$.subscribe({
      next: (stage) => {

        if(this.activeStage !== stage.stage){
          this.activeStage = stage.stage
          this.datasetRoadMap = stage

        }else{
          this.activeStage = null
        }

      }

    });
  }

}

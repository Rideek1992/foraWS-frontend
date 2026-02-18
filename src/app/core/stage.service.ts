import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StageService {

  private stageSource = new Subject<any>();

  stage$ = this.stageSource.asObservable();

  setStage(stage: any) {
    this.stageSource.next(stage);
  }

  constructor() { }
}

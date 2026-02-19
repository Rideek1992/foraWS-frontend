import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramStagesComponent } from './diagram-stages.component';

describe('DiagramStagesComponent', () => {
  let component: DiagramStagesComponent;
  let fixture: ComponentFixture<DiagramStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagramStagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

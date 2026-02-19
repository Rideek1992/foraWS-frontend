import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadMapElementComponent } from './road-map-element.component';

describe('RoadMapElementComponent', () => {
  let component: RoadMapElementComponent;
  let fixture: ComponentFixture<RoadMapElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadMapElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadMapElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

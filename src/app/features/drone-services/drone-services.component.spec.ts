import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneServicesComponent } from './drone-services.component';

describe('DroneServicesComponent', () => {
  let component: DroneServicesComponent;
  let fixture: ComponentFixture<DroneServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroneServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

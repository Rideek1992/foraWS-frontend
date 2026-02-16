import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkingWarehouseComponent } from './marking-warehouse.component';

describe('MarkingWarehouseComponent', () => {
  let component: MarkingWarehouseComponent;
  let fixture: ComponentFixture<MarkingWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkingWarehouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkingWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadBlockComponent } from './lead-block.component';

describe('LeadBlockComponent', () => {
  let component: LeadBlockComponent;
  let fixture: ComponentFixture<LeadBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

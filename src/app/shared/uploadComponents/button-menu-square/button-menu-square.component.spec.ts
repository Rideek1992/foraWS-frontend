import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMenuSquareComponent } from './button-menu-square.component';

describe('ButtonMenuSquareComponent', () => {
  let component: ButtonMenuSquareComponent;
  let fixture: ComponentFixture<ButtonMenuSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonMenuSquareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonMenuSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

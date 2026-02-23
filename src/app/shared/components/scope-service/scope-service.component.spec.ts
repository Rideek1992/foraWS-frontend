import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeServiceComponent } from './scope-service.component';

describe('ScopeServiceComponent', () => {
  let component: ScopeServiceComponent;
  let fixture: ComponentFixture<ScopeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScopeServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

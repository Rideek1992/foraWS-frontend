import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteCreationComponent } from './website-creation.component';

describe('WebsiteCreationComponent', () => {
  let component: WebsiteCreationComponent;
  let fixture: ComponentFixture<WebsiteCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInBuildingComponent } from './page-in-building.component';

describe('PageInBuildingComponent', () => {
  let component: PageInBuildingComponent;
  let fixture: ComponentFixture<PageInBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageInBuildingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageInBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

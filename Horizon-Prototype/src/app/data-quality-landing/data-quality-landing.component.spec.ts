import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataQualityLandingComponent } from './data-quality-landing.component';

describe('DataQualityLandingComponent', () => {
  let component: DataQualityLandingComponent;
  let fixture: ComponentFixture<DataQualityLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataQualityLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataQualityLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

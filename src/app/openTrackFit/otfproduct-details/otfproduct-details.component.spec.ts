import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OTFproductDetailsComponent } from './otfproduct-details.component';

describe('OTFproductDetailsComponent', () => {
  let component: OTFproductDetailsComponent;
  let fixture: ComponentFixture<OTFproductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OTFproductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OTFproductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

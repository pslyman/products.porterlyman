import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDPproductDetailsComponent } from './pdpproduct-details.component';

describe('PDPproductDetailsComponent', () => {
  let component: PDPproductDetailsComponent;
  let fixture: ComponentFixture<PDPproductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDPproductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDPproductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

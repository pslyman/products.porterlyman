import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDCproductDetailsComponent } from './pdcproduct-details.component';

describe('PDCproductDetailsComponent', () => {
  let component: PDCproductDetailsComponent;
  let fixture: ComponentFixture<PDCproductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDCproductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDCproductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

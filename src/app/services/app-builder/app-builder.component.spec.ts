import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBuilderComponent } from './app-builder.component';

describe('AppBuilderComponent', () => {
  let component: AppBuilderComponent;
  let fixture: ComponentFixture<AppBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

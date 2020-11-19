import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBuilderComponent } from './site-builder.component';

describe('BuilderComponent', () => {
  let component: SiteBuilderComponent;
  let fixture: ComponentFixture<SiteBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

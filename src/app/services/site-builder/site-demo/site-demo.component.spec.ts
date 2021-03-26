import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDemoComponent } from './site-demo.component';

describe('SiteDemoComponent', () => {
  let component: SiteDemoComponent;
  let fixture: ComponentFixture<SiteDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

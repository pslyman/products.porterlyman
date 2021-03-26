import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinkerComponent } from './social-linker.component';

describe('SocialLinkerComponent', () => {
  let component: SocialLinkerComponent;
  let fixture: ComponentFixture<SocialLinkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialLinkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLinkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

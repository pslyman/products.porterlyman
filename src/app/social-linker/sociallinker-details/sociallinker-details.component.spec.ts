import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SociallinkerDetailsComponent } from './sociallinker-details.component';

describe('SociallinkerDetailsComponent', () => {
  let component: SociallinkerDetailsComponent;
  let fixture: ComponentFixture<SociallinkerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SociallinkerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SociallinkerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

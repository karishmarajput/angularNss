import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVolunteerComponent } from './display-volunteer.component';

describe('DisplayVolunteerComponent', () => {
  let component: DisplayVolunteerComponent;
  let fixture: ComponentFixture<DisplayVolunteerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayVolunteerComponent]
    });
    fixture = TestBed.createComponent(DisplayVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobOpeningComponent } from './new-job-opening.component';

describe('NewJobOpeningComponent', () => {
  let component: NewJobOpeningComponent;
  let fixture: ComponentFixture<NewJobOpeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJobOpeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

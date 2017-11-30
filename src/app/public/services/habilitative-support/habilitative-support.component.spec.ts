import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitativeSupportComponent } from './habilitative-support.component';

describe('HabilitativeSupportComponent', () => {
  let component: HabilitativeSupportComponent;
  let fixture: ComponentFixture<HabilitativeSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilitativeSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitativeSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

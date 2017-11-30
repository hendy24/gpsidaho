import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCompanyComponent } from './our-company.component';

describe('OurCompanyComponent', () => {
  let component: OurCompanyComponent;
  let fixture: ComponentFixture<OurCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

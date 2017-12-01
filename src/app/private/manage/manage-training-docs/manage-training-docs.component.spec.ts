import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTrainingDocsComponent } from './manage-training-docs.component';

describe('ManageTrainingDocsComponent', () => {
  let component: ManageTrainingDocsComponent;
  let fixture: ComponentFixture<ManageTrainingDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTrainingDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTrainingDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

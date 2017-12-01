import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTrainingVideosComponent } from './manage-training-videos.component';

describe('ManageTrainingVideosComponent', () => {
  let component: ManageTrainingVideosComponent;
  let fixture: ComponentFixture<ManageTrainingVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTrainingVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTrainingVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

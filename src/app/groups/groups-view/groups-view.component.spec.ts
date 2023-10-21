import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsViewComponent } from './groups-view.component';

describe('GroupsViewComponent', () => {
  let component: GroupsViewComponent;
  let fixture: ComponentFixture<GroupsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupsViewComponent]
    });
    fixture = TestBed.createComponent(GroupsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

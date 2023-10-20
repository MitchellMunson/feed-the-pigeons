import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccessApprovalComponent } from './user-access-approval.component';

describe('UserAccessApprovalComponent', () => {
  let component: UserAccessApprovalComponent;
  let fixture: ComponentFixture<UserAccessApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAccessApprovalComponent]
    });
    fixture = TestBed.createComponent(UserAccessApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

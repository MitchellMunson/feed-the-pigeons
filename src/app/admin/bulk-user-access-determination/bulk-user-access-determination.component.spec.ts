import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUserAccessDeterminationComponent } from './bulk-user-access-determination.component';

describe('UserAccessApprovalComponent', () => {
  let component: BulkUserAccessDeterminationComponent;
  let fixture: ComponentFixture<BulkUserAccessDeterminationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulkUserAccessDeterminationComponent]
    });
    fixture = TestBed.createComponent(BulkUserAccessDeterminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

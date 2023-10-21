import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualUserAccessDeterminationComponent } from './individual-user-access-determination.component';

describe('IndividualUserAccessDeterminationComponent', () => {
  let component: IndividualUserAccessDeterminationComponent;
  let fixture: ComponentFixture<IndividualUserAccessDeterminationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualUserAccessDeterminationComponent]
    });
    fixture = TestBed.createComponent(IndividualUserAccessDeterminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

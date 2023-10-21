import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccessDeterminationEditorComponent } from './user-access-determination-editor.component';

describe('UserAccessDeterminationEditorComponent', () => {
  let component: UserAccessDeterminationEditorComponent;
  let fixture: ComponentFixture<UserAccessDeterminationEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAccessDeterminationEditorComponent]
    });
    fixture = TestBed.createComponent(UserAccessDeterminationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {UserAccessDecision, UserAccessRequest, UserAccessResponse} from "../../models/user-access.model";

@Component({
  selector: 'app-user-access-determination-editor',
  templateUrl: './user-access-determination-editor.component.html',
  styleUrls: ['./user-access-determination-editor.component.scss']
})
export class UserAccessDeterminationEditorComponent implements OnInit, OnChanges {

  @Input() userAccessRequests: UserAccessRequest[];
  @Output() isSaveEnabled: EventEmitter<boolean>;
  userAccessForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,) {

    this.userAccessRequests = [];
    this.isSaveEnabled = new EventEmitter<boolean>();

    this.userAccessForm = this.formBuilder.group({
      userAccessResponses: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.createUserAccessForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.createUserAccessForm();
  }

  createUserAccessForm(): void {
    this.userAccessForm = this.formBuilder.group({
      userAccessResponses: this.formBuilder.array([])
    });

    this.userAccessRequests?.forEach((userAccessRequest) => {
      this.userAccessResponses.push(
        this.formBuilder.group({
          userEmail: new FormControl(userAccessRequest.userEmail),
          approvalResponse: new FormControl(UserAccessDecision.UNDECIDED)
        })
      )
    });
  }

  onChangeApprovalResponse(): void {
    let hasAnyApprovalResponseChanged: boolean = false;

    for(let index: number = 0; index < this.userAccessRequests?.length; ++index) {
      const userAccessRequest: UserAccessRequest = this.userAccessRequests[index];
      const userAccessResponse: UserAccessResponse = this.userAccessResponses.at(index).getRawValue();

      if(userAccessRequest.approvalResponse !== userAccessResponse.approvalResponse) {
        hasAnyApprovalResponseChanged = true;
        break;
      }
    }

    this.isSaveEnabled.emit(hasAnyApprovalResponseChanged);
  }

  get userAccessResponses(): FormArray {
    return this.userAccessForm.get('userAccessResponses') as FormArray;
  }

}

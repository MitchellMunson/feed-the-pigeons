import {Component} from '@angular/core';
import {UserAccessApproved, UserAccessRequest, UserAccessResponse} from "../../models/user-access.model";
import {UserAccessService} from "../services/user-access.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-access-approval',
  templateUrl: './user-access-approval.component.html',
  styleUrls: ['./user-access-approval.component.scss']
})
export class UserAccessApprovalComponent {

  userAccessForm: FormGroup;
  userAccessRequests: UserAccessRequest[];


  constructor(
    private readonly userAccessService: UserAccessService,
    private readonly formBuilder: FormBuilder,) {

    this.userAccessForm = this.formBuilder.group({
      userAccessResponses: this.formBuilder.array([])
    });
    this.userAccessRequests = [];
  }

  ngOnInit(): void {
    this.userAccessForm = this.formBuilder.group({
      userAccessResponses: this.formBuilder.array([])
    });

    this.retrieveUserAccessData();
  }

  retrieveUserAccessData(): void {
    //TODO: Turn on screen loading notification
    this.userAccessService.getUserAccessRequests().subscribe({
      next: (userAccessRequests: UserAccessRequest[]): void => {
        this.userAccessRequests = userAccessRequests;
        this.constructUserAccessResponseControls(userAccessRequests);
        //TODO: turn off screen loading notification
      },
      error: (error): void => {
        //TODO: turn off screen loading notification
        //TODO: Display error message
      },
      complete: (): void => {
        //TODO: ????
      }
    })
  }

  constructUserAccessResponseControls(userAccessRequests: UserAccessRequest[]): void {
    userAccessRequests?.forEach((userAccessRequest) => {
      this.userAccessResponses.push(
        this.formBuilder.group({
          userEmail: new FormControl(userAccessRequest.email),
          userResponse: new FormControl(UserAccessApproved.UNDECIDED)
        })
      )
    });
  }

  isSaveResponsesEnabled(): boolean {
    //TODO: Fill out logic
    return false;
  }

  onSaveResponses(): void {

    //TODO:

    const userAccessResponses: UserAccessResponse[] = [];

    this.userAccessService.answerRequests(userAccessResponses).subscribe(() => {
      //TODO: Display success message
      this.retrieveUserAccessData();
    }, (error) => {
      //TODO: display error message
    })
  }

  get userAccessResponses(): FormArray {
    return this.userAccessForm.get('userAccessResponses') as FormArray;
  }

}

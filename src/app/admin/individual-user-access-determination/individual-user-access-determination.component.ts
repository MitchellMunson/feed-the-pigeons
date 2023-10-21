import {Component, OnInit} from '@angular/core';
import {UserAccessRequest, UserAccessResponse} from "../../models/user-access.model";
import {UserAccessService} from "../services/user-access.service";
import {UserSearchType} from "../models/user-retrieval-type.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-individual-user-access-determination',
  templateUrl: './individual-user-access-determination.component.html',
  styleUrls: ['./individual-user-access-determination.component.scss']
})
export class IndividualUserAccessDeterminationComponent implements OnInit {

  userSearchForm: FormGroup;

  userAccessRequests: UserAccessRequest[];
  isSaveEnabled: boolean;

  constructor(
    private readonly userAccessService: UserAccessService,
    private readonly formBuilder: FormBuilder) {

    this.userSearchForm = formBuilder.group({});

    this.userAccessRequests = [];
    this.isSaveEnabled = false;
  }

  ngOnInit(): void {
    this.createUserSearchForm();
  }

  createUserSearchForm(): void {
    this.userSearchForm = this.formBuilder.group({
      userSearchText: new FormControl(''),
      userSearchType: new FormControl(UserSearchType.USERNAME)
    });
  }

  isSearchEnabled() {
    const userSearchText: string = this.userSearchForm.get('userSearchText')?.value;

    return userSearchText?.trim().length > 0
  }

  onClickSearch() {
    this.retrieveUserAccess();
  }

  retrieveUserAccess(): void {

    const userSearchText: string = this.userSearchForm.get('userSearchText')?.value;
    const userSearchType: UserSearchType = this.userSearchForm.get('userSearchType')?.value;

    if(userSearchType === UserSearchType.USERNAME) {
      this.retrieveUserAccessByUsername(userSearchText);
    }

    if(userSearchType === UserSearchType.EMAIL) {
      this.retrieveUserAccessByEmail(userSearchText);
    }

  }

  retrieveUserAccessByUsername(username: string): void {
    //TODO: Turn on screen loading notification
    this.userAccessService.getSingleUserAccessRequestsByUsername(username).subscribe({
      next: (userAccessRequest: UserAccessRequest): void => {
        this.userAccessRequests = [userAccessRequest];
        //TODO: turn off screen loading notification
      },
      error: (error): void => {
        //TODO: turn off screen loading notification
        //TODO: Display error message
      }
    })
  }

  retrieveUserAccessByEmail(email: string): void {
    //TODO: Turn on screen loading notification
    this.userAccessService.getSingleUserAccessRequestsByEmail(email).subscribe({
      next: (userAccessRequest: UserAccessRequest): void => {
        this.userAccessRequests = [userAccessRequest];
        //TODO: turn off screen loading notification
      },
      error: (error): void => {
        //TODO: turn off screen loading notification
        //TODO: Display error message
      }
    })
  }

  updateIsSaveEnabled(isSaveEnabled: boolean): void {
    this.isSaveEnabled = isSaveEnabled;
  }

  isSaveResponseEnabled(): boolean {
    return this.isSaveEnabled;
  }

  onSaveResponse(): void {
    this.userAccessService.updateUserAccess(this.userAccessRequests[0]).subscribe({
      next: () => {
        //TODO: Display success message
        this.retrieveUserAccess();
      },
      error: (error) => {
        //TODO: display error message
      }
    });
  }

  protected readonly UserSearchType = UserSearchType;
}

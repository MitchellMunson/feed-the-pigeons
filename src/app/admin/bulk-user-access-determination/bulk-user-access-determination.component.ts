import {Component, OnInit} from '@angular/core';
import {UserAccessDecision, UserAccessRequest, UserAccessResponse} from "../../models/user-access.model";
import {UserAccessService} from "../services/user-access.service";

@Component({
  selector: 'app-bulk-user-access-determination',
  templateUrl: './bulk-user-access-determination.component.html',
  styleUrls: ['./bulk-user-access-determination.component.scss']
})
export class BulkUserAccessDeterminationComponent implements OnInit {

  userAccessRequests: UserAccessRequest[];
  isSaveEnabled: boolean;

  constructor(
    private readonly userAccessService: UserAccessService) {

    this.userAccessRequests = [];
    this.isSaveEnabled = false;
  }

  ngOnInit(): void {
    this.retrieveUserAccessData();
  }

  retrieveUserAccessData(): void {
    //TODO: Turn on screen loading notification
    this.userAccessService.getBulkUserAccessRequests().subscribe({
      next: (userAccessRequests: UserAccessRequest[]): void => {
        this.userAccessRequests = userAccessRequests;
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

  isSaveResponsesEnabled(): boolean {
    return this.isSaveEnabled;
  }

  onSaveResponses(): void {
    this.userAccessService.updateBulkUserAccess(this.userAccessRequests).subscribe({
      next: () => {
        //TODO: Display success message
        this.retrieveUserAccessData();
      },
      error: (error) => {
        //TODO: display error message
      }
    });
  }

}

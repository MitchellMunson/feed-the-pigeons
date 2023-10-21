import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {UserAccessDecision, UserAccessRequest, UserAccessResponse} from "../../models/user-access.model";

@Injectable({
  providedIn: 'root'
})
export class UserAccessService {

  constructor() {

  }

  getSingleUserAccessRequestsByEmail(userEmail: string): Observable<UserAccessRequest> {
    return of(
      {
        userEmail: 'test-by-email@email.com',
        username: 'test-by-email',
        requestDate: new Date('01/01/2023'),
        approvalResponse: UserAccessDecision.UNDECIDED
      },
    );
  }

  getSingleUserAccessRequestsByUsername(username: string): Observable<UserAccessRequest> {
    return of(
      {
        userEmail: 'test-by-username@email.com',
        username: 'test-by-username',
        requestDate: new Date('01/01/2023'),
        approvalResponse: UserAccessDecision.UNDECIDED
      },
    );
  }

  getBulkUserAccessRequests(): Observable<UserAccessRequest[]> {
    return of([
      {
        userEmail: 'test1@email.com',
        username: 'test1-name',
        requestDate: new Date('01/01/2023'),
        approvalResponse: UserAccessDecision.UNDECIDED
      },
      {
        userEmail: 'test2@email.com',
        username: 'test2-name',
        requestDate: new Date('02/02/2023'),
        approvalResponse: UserAccessDecision.UNDECIDED
      },
      {
        userEmail: 'test3@email.com',
        username: 'test3-name',
        requestDate: new Date('03/03/2023'),
        approvalResponse: UserAccessDecision.UNDECIDED
      }
    ]);
  }

  updateUserAccess(userAccessResponses: UserAccessResponse): Observable<boolean> {
    return of(true)
  }

  updateBulkUserAccess(userAccessResponses: UserAccessResponse[]): Observable<boolean> {
    return of(true)
  }

}

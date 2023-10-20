import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {UserAccessRequest, UserAccessResponse} from "../../models/user-access.model";

@Injectable({
  providedIn: 'root'
})
export class UserAccessService {

  constructor() {

  }

  getUserAccessRequests(): Observable<UserAccessRequest[]> {
    return of([
      {
        email: 'test1@email.com',
        username: 'test1-name',
        requestDate: new Date('01/01/2023')
      },
      {
        email: 'test2@email.com',
        username: 'test2-name',
        requestDate: new Date('02/02/2023')
      },
      {
        email: 'test3@email.com',
        username: 'test3-name',
        requestDate: new Date('03/03/2023')
      }
    ]);
  }

  answerRequests(userAccessResponses: UserAccessResponse[]): Observable<void> {
    return of()
  }

}

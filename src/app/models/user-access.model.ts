
export interface UserAccessRequest {
  userEmail: string,
  username: string,
  requestDate: Date,
  approvalResponse: UserAccessDecision
}

export interface UserAccessResponse {
  userEmail: string,
  approvalResponse: UserAccessDecision
}

export enum UserAccessDecision {
  APPROVED = 'A',
  DISAPPROVED = 'D',
  UNDECIDED = 'U'
}

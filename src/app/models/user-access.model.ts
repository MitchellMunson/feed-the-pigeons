
export interface UserAccessRequest {
  email: string,
  username: string,
  requestDate: Date,
}

export enum UserAccessApproved {
  APPROVED = 'A',
  DISAPPROVED = 'D',
  UNDECIDED = 'U'
}

export interface UserAccessResponse {
  email: string,
  isApproved: boolean
}

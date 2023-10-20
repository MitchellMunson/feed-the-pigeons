import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {UserAccessApprovalComponent} from "./user-access-approval/user-access-approval.component";

export const userAccessApproval: Route = {
  path: 'user-access-approval',
  component: UserAccessApprovalComponent,
  data: {
    screenData: {
      screenTitle: 'User Access Approval',
      screenId: 'user-access-approval-1'
    }
  }
}

const adminRoutes: Routes = [
  userAccessApproval
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

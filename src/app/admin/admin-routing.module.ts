import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {BulkUserAccessDeterminationComponent} from "./bulk-user-access-determination/bulk-user-access-determination.component";
import {
  IndividualUserAccessDeterminationComponent
} from "./individual-user-access-determination/individual-user-access-determination.component";

export const bulkUndecidedUserAccess: Route = {
  path: 'bulk-user-access-determination',
  component: BulkUserAccessDeterminationComponent,
  data: {
    screenData: {
      screenTitle: 'Bulk User Access Determination',
      screenId: 'bulk-user-access-1'
    }
  }
}

export const individualUserAccessDetermination: Route = {
  path: 'individual-user-access-determination',
  component: IndividualUserAccessDeterminationComponent,
  data: {
    screenData: {
      screenTitle: 'Individual User Access Determination',
      screenId: 'individual-user-access-1'
    }
  }
}

const adminRoutes: Routes = [
  bulkUndecidedUserAccess,
  individualUserAccessDetermination
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

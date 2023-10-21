import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { BulkUserAccessDeterminationComponent } from './bulk-user-access-determination/bulk-user-access-determination.component';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { IndividualUserAccessDeterminationComponent } from './individual-user-access-determination/individual-user-access-determination.component';
import { UserAccessDeterminationEditorComponent } from './user-access-determination-editor/user-access-determination-editor.component';


@NgModule({
  declarations: [
    AdminComponent,
    BulkUserAccessDeterminationComponent,
    IndividualUserAccessDeterminationComponent,
    UserAccessDeterminationEditorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }

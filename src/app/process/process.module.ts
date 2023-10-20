import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent } from './process.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ProcessComponent
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    SharedModule
  ]
})
export class ProcessModule { }

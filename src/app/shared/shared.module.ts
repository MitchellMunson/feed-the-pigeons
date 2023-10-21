import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenTitleDisplayPipe } from './pipes/screen-title-display.pipe';
import { ScreenIdDisplayPipe } from './pipes/screen-id-display.pipe';
import { AlertsComponent } from './alerts/alerts.component';



@NgModule({
  declarations: [
    ScreenTitleDisplayPipe,
    ScreenIdDisplayPipe,
    AlertsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScreenTitleDisplayPipe,
    ScreenIdDisplayPipe
  ]
})
export class SharedModule { }

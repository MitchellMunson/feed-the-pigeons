import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenTitleDisplayPipe } from './pipes/screen-title-display.pipe';
import { ScreenIdDisplayPipe } from './pipes/screen-id-display.pipe';



@NgModule({
  declarations: [
    ScreenTitleDisplayPipe,
    ScreenIdDisplayPipe
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

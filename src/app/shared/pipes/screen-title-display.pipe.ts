import { Pipe, PipeTransform } from '@angular/core';
import {ScreenData} from "../../models/screen-data.model";

@Pipe({
  name: 'screenTitleDisplay'
})
export class ScreenTitleDisplayPipe implements PipeTransform {

  transform(screenData: ScreenData | null, titleSeperator: string): unknown {
    let screenTitle = '';

    if(screenData?.screenTitle) {
      if(titleSeperator) {
        screenTitle += titleSeperator;
      }
      screenTitle += screenData.screenTitle;
    }

    return screenTitle;
  }

}

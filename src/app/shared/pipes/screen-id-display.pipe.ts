import { Pipe, PipeTransform } from '@angular/core';
import {ScreenData} from "../../models/screen-data.model";

@Pipe({
  name: 'screenIdDisplay'
})
export class ScreenIdDisplayPipe implements PipeTransform {

  private readonly DEFAULT_SCREEN_ID: string = 'MISSING_SCREEN_ID';
  transform(screenData: ScreenData | null): unknown {
    let screenId: string = this.DEFAULT_SCREEN_ID;

    if(screenData?.screenId) {
      screenId = screenData.screenId;
    }

    return screenId;
  }

}

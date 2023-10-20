import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ScreenData} from "../models/screen-data.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  screenData: ScreenData | null;

  constructor(
    private readonly activatedRoute: ActivatedRoute) {

    this.screenData = null;
  }
  ngOnInit(): void {
    //TOOD: research if this is best way to handle this
    this.screenData = this.activatedRoute.snapshot?.firstChild?.data['screenData'];
    // this.activatedRoute.data.subscribe(
    //   (data) => {
    //     console.log('here', data)
    //     this.data = route.snapshot.firstChild.data['screenData'];
    //     this.screenData = data['screenData'];
    //   }
    // );
  }

}

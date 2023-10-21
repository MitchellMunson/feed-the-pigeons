import { Component } from '@angular/core';
import {AlertsService} from "./alerts.service";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {

  constructor(
    private readonly alertsService: AlertsService
  ) {
  }





}

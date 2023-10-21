import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  successAlerts: string[][];
  errorAlerts: string[][];
  warningAlerts: string[][];
  infoAlerts: string[][];

  constructor() {
    this.successAlerts = [];
    this.errorAlerts = [];
    this.warningAlerts = [];
    this.infoAlerts = [];
  }

  success(message: string, ...messages: string[]): void;
  success(...messages: string[]): void {
    this.successAlerts.push(messages);
  }

  error(message: string, ...messages: string[]): void;
  error(...messages: string[]): void {
    this.successAlerts.push(messages);
  }

  warning(message: string, ...messages: string[]): void;
  warning(...messages: string[]): void {
    this.warningAlerts.push(messages);
  }

  info(message: string, ...messages: string[]): void;
  info(...messages: string[]): void {
    this.infoAlerts.push(messages);
  }

}

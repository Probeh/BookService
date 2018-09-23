import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AlertArgs } from '../Interfaces/AlertArgs';

@Injectable()
export class AlertService {

  // Default Constructor
  constructor(private toast: ToastrService) {
    this.toast.toastrConfig.closeButton = true;
    this.toast.toastrConfig.timeOut = 2000;
    this.toast.toastrConfig.progressBar = true;
    this.toast.toastrConfig.maxOpened = 1;
    this.toast.toastrConfig.preventDuplicates = true;
  }

  public Show(details: AlertArgs): void {
    switch (details.type) {
      case AlertType.Error:
        this.toast.error(details.content, details.title); break;
      case AlertType.Success:
        this.toast.success(details.content, details.title); break;
      case AlertType.Warning:
        this.toast.warning(details.content, details.title); break;
      case AlertType.Info:
        this.toast.info(details.content, details.title); break;
    }
  }
}

export enum AlertType {
  Error,
  Success,
  Warning,
  Info
}
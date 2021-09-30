import { DeviceDetectorService } from 'ngx-device-detector';

import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectionService {
  appContainer: ElementRef;

  private isMobileResolution: boolean;
  constructor(private deviceDetection: DeviceDetectorService) {
    this.isMobileResolution = this.deviceDetection.isMobile();

  }
  isMobile() {
    return this.isMobileResolution;
  }

  isDesktop() {
    return !this.isMobileResolution;
  }


  scrollToTop() {
    if (this.appContainer && this.appContainer.nativeElement) {

      this.appContainer.nativeElement.scrollTop = 0;
    }
  }
}

import { Directive, HostListener, ElementRef } from '@angular/core';
import { UtilService } from '../../core/services/util-service.service';
@Directive({
  selector: '[appCaptureScrollEvent]'
})
export class CaptureScrollEventDirective {

  constructor(
    private elementRef: ElementRef, private utilService: UtilService
  ) { }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    this.utilService.sendScrollEvent(event);
  }
}

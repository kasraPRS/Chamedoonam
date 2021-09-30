import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivationEnd, NavigationEnd, Router, RouterOutlet, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { DeviceDetectionService } from '../core/services/device-detection.service';

import { OverlayContainer, CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';
import { MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
@Component({
    template: '',
})

export class BaseFullLayoutComponent implements OnInit, AfterViewInit {

    @ViewChild('appContainer', { read: ElementRef }) appContainer: ElementRef<any>;

    footerIsVisible = false;

    routerEvents$: Subscription;



    @ViewChild(MatSidenavContainer, { static: true }) sidenavContainer: MatSidenavContainer;
    @ViewChild(CdkScrollable, { static: false }) scrollable: CdkScrollable;
    @ViewChild(MatSidenavContent, { static: true }) content: MatSidenavContent;
    @ViewChild('toolBara', { static: true }) toolbar: MatToolbar;
    constructor(
        public appStateService: DeviceDetectionService,
        public router: Router
    ) {

    }

    onActivate() {
        this.appStateService.scrollToTop();
    }

    ngOnInit() { }

    ngAfterViewInit() {

        this.appStateService.appContainer = this.appContainer;

        this.scrollable.elementScrolled().subscribe(() => {

            const scrollTop = this.sidenavContainer.scrollable.getElementRef().nativeElement.scrollTop;

            if (scrollTop > 0) {
                this.toolbar._elementRef.nativeElement.classList.add('sticky');
                this.toolbar._elementRef.nativeElement.classList.remove('fixed');
            } else {

                this.toolbar._elementRef.nativeElement.classList.add('fixed');
                this.toolbar._elementRef.nativeElement.classList.remove('sticky');
            }
        });
    }
}
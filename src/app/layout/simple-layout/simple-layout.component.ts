import { ChangeTitleService } from './../../core/services/change-title.service';
import { Subscription } from 'rxjs';
import { Router, } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-simple-layout',
  templateUrl: './simple-layout.component.html',
  styleUrls: ['./simple-layout.component.scss']
})
export class SimpleLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('appContainer', { read: ElementRef }) appContainer: ElementRef;
  isEditable = false;
  title: any;
  description: any;
  phoneNumber: any;
  subscription: Subscription[] = [];
  constructor(
    private router: Router,
    private changeTitle: ChangeTitleService,
    private _location: Location

  ) {

    // this.router.navigateByUrl('/auth')
    this.subscription.push(
      changeTitle.title.subscribe(r => { this.title = r; }),
      changeTitle.description.subscribe(r => { this.description = r; }),
      changeTitle.phoneNumber.subscribe(r => { this.phoneNumber = r })
    )

  }
  onClose() {
    this.router.navigateByUrl('/');
  }
  ngOnInit(): void {
  }

  signUp() {
    this.router.navigateByUrl('auth/signup');
  }

  ngOnDestroy() {
    this.subscription.forEach(el => el.unsubscribe);
  }
}

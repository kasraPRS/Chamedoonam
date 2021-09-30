import { Component, OnInit, Input } from '@angular/core';
import { profileItems } from '../profile-card-items';
@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  profileItems = profileItems;

  @Input() profile: any;
  constructor() { }

  ngOnInit(): void {

  }
  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('visited-cities');
    window.location.reload();

  }
}

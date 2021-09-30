import { AuthenticationGuard } from './../routing/authentication.guard';
import { SharedModule } from './../shared/share.module';
import { Routes, RouterModule } from '@angular/router';
import { SelectedAccommodationComponent } from './selected-accommodation/selected-accommodation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionComponent } from './shared/option/option.component';
import { PaymentGetwayComponent } from './payment-getway/payment-getway.component';
import { MessageDialogComponent } from './shared/option/message-dialog/message-dialog.component';
import { ReservationGuard } from './reservation.guard';
const routes: Routes = [
  {
    path: '',
    component: SelectedAccommodationComponent,
    canActivate: [ReservationGuard],

  },
  {
    path: 'payment',
    component: PaymentGetwayComponent,
    canActivate: [ReservationGuard]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
]

@NgModule({
  declarations: [
    SelectedAccommodationComponent,
    OptionComponent,
    PaymentGetwayComponent,
    MessageDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ReservationModule { }

import { GetReserveResolverService } from './get-reserve-resolver.resolver';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserReservationComponent } from './user-reservation/user-reservation.component';
import { SharedModule } from '../shared/share.module';

const routes: Routes = [
  {
    path: '',
    component: UserReservationComponent,
    resolve: { cres: GetReserveResolverService }
  }
];
@NgModule({
  declarations: [UserReservationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class UserControlPanelModule { }

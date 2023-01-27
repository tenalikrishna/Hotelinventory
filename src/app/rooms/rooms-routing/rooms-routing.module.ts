
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from '../rooms.component';
import { RoomAddComponent } from '../room-add/room-add.component';
import { RoomsBookingComponent } from '../rooms-booking/rooms-booking.component';

const routes: Routes = [
  {
    path: 'rooms',
    component: RoomsComponent,
    children: [
      { path: 'add', component: RoomAddComponent },
      { path: ':roomid', component: RoomsBookingComponent },
    ],
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class RoomsRoutingModule { }

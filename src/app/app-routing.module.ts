
import { RoomsComponent } from './rooms/rooms.component';
import { LoginGuard } from './gaurds/login.guard';

import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoomAddComponent } from './rooms/room-add/room-add.component';


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent, canActivate:[LoginGuard] },

  { path: 'login', component: LoginComponent},

 
  {path:'rooms',
 loadChildren:()=>
import('./rooms/rooms.module').then((m) => m.RoomsModule)},

  { path: 'rooms/:roomid', component: RoomsBookingComponent , canActivate:[LoginGuard]},

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'booking',
    loadChildren:() =>
      import('./booking/booking.module').then((m) => m.BookingModule),
      //  canActivate:[LoginGuard]
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

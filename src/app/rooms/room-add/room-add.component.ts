import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomList } from '../room';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.scss'],
})
export class RoomAddComponent {
  successMessage: string = '';
  room: RoomList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  };
  constructor(private roomsService: RoomsService) {}
  AddRoom(roomsForm: NgForm) {
    this.roomsService
      .addRoom(this.room)
      .subscribe((data) => {
      this.successMessage = 'Room Added successfully';
      roomsForm.reset()
    });
  }
}

import { Injectable } from '@angular/core';
import { RoomList } from '../room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomslist: RoomList[ ] = [{
    roomtype:"krishnan",
    amenties:"jksdj",
    price:10,
    checkinTime:new Date('10/11/1212'),
    checkoutTime:new Date('14/15/454')
  
  },
  {
    roomtype:"adav",
    amenties:"da",
    price:10,
    checkinTime:new Date('10/11/1212'),
    checkoutTime:new Date('14/15/454')
  
  },
  {
    roomtype:"da",
    amenties:"jksdj",
    price:10,
    checkinTime:new Date('10/11/1212'),
    checkoutTime:new Date('14/15/454')
  
  }];
  constructor() { }
  
  getRooms(){
    return this.roomslist;
  }
}

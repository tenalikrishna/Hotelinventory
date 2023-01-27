import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
import { shareReplay } from 'rxjs';
import { RoomList } from '../room';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  // headers = new HttpHeaders({'token': '12544'});
  roomslist: RoomList[] = [
    {
      roomNumber: 'kitta',
      roomType: 'kitta',
      amenities: 'kitta',
      price: 4,
      photos: 'kitta',
      checkinTime: new Date('10/11/1212'),
      checkoutTime: new Date('10/11/1212'),
      rating: 5,
    },
    {
      roomNumber: 'kitta',
      roomType: 'kitta',
      amenities: 'kitta',
      price: 4,
      photos: 'kitta',
      checkinTime: new Date('10/11/1212'),
      checkoutTime: new Date('10/11/1212'),
      rating: 5,
    },
    {
      roomNumber: 'kitta',
      roomType: 'kitta',
      amenities: 'kitta',
      price: 4,
      photos: 'kitta',
      checkinTime: new Date('10/11/1212'),
      checkoutTime: new Date('10/11/1212'),
      rating: 5,
    },
  ];
  constructor(private http: HttpClient) {}
  getROOMS$ = this.http.get<RoomList[]>('/api/rooms', {}).pipe(shareReplay(1));
  getRooms() {
    return this.http.get<RoomList[]>('/api/Rooms');
  }
  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/Rooms', room);
  }
  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/Rooms/${room.roomNumber}`, room);
  }
  delete(id: string) {
    return this.http.delete<RoomList[]>(`/api/Rooms/${id}`);
  }
  getphotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }
}

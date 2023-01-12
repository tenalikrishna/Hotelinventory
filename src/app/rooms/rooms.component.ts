import { ThisReceiver } from '@angular/compiler';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RoomList, rooms } from './room';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck,AfterViewInit, AfterViewChecked{
  ngAfterViewChecked(): void {
   this.headerComponent.title="krishna";
  }
  ngAfterViewInit(): void {
    console.log('on viewinit is called ');
    console.log(this.headerChildrenComponent.last.title="Last Title");
  }
  ngDoCheck(): void {
    console.log('on changes is called ');
  }
  hotelname = "krishnan";
  numberofrooms=10;
  hiderooms= false;
rooms: rooms={
  availablerooms:5,
  bookedrooms:3,
  totalrooms:10
};
@ViewChild(HeaderComponent, {static: true}) headerComponent!:HeaderComponent;

@ViewChildren(HeaderComponent) headerChildrenComponent!:QueryList<HeaderComponent>;
roomslist:RoomList[]=[]
  toogle(){
 this.hiderooms=! this.hiderooms;
  }
  ngOnInit():void{
    console.log(this.headerComponent);
    this.roomslist = this.roomsService.getRooms();

  }
  selectedroom!:RoomList
  
  selectRoom(room:RoomList){
   this.selectedroom=room;
  }
  addRoom(){
    const room: RoomList={
      roomtype:"kitta",
      amenties:"AC",
      price:10,
      checkinTime:new Date('10/11/1212'),
      checkoutTime:new Date('14/15/454')
    }
    // this.roomslist.push(room);
    this.roomslist= [...this.roomslist,room]
  }
  constructor(private roomsService:RoomsService) { }

}

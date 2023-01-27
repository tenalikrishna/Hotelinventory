import { Router } from '@angular/router';
import { ConfigService } from './../service/config.service';
import { AppConfig } from './../AppConfig/appconfig.interface';
import { HttpEventType, HttpRequest } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { catchError, map, Observable, observable, Subject, Subscription, VirtualTimeScheduler } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { RoomList, rooms } from './room';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit,AfterViewInit, AfterViewChecked{
  constructor(private roomsService:RoomsService, private configservice: ConfigService, private router:Router) { }
  ngAfterViewChecked(): void {
   this.headerComponent.title="krishna";
  }
  ngAfterViewInit(): void {
    console.log('on viewinit is called ');
    console.log(this.headerChildrenComponent.last.title="Last Title");
  }
  // ngDoCheck(): void {
  //   console.log('on changes is called ');
  // }
  hotelname = "krishnan";
  numberofrooms=10;
  hiderooms= true;
rooms: rooms={
  availablerooms:5,
  bookedrooms:3,
  totalrooms:10
};
@ViewChild(HeaderComponent, {static: true}) headerComponent!:HeaderComponent;

@ViewChildren(HeaderComponent) headerChildrenComponent!:QueryList<HeaderComponent>;
roomslist:RoomList[]=[]

error$ = new Subject<string>();
getErrors$ =this.error$.asObservable();
subscription!: Subscription;
rooms$ = this.roomsService.getROOMS$.pipe(
  catchError((err) => {
    console.log(err);
    this.error$.next(err.message);
    return([]);
  })
);
roomCount$ = this.roomsService.getROOMS$.pipe(
  map((rooms)=> rooms.length)
)

totalBytes=0;
  toogle(){
 this.hiderooms=! this.hiderooms;
  }
  ngOnInit():void{


    // this.roomsService.getphotos().subscribe((data) => {
    //   return console.log(data);
    // });

    this.roomsService.getphotos().subscribe((event)=> {
      console.log(event);
      
      switch(event.type){
        case HttpEventType.Sent:
          {
            console.log('Request has made');
            break;
          }
          case HttpEventType.ResponseHeader:
            {
              console.log('request sucess');
              break;
            }
            case HttpEventType.DownloadProgress:
            
              {
                this.totalBytes+= event.loaded;
                break;
              }
              case HttpEventType.Response:{
                console.log(event.body);
              }
      }
    });




    this.stream.subscribe((data) => console.log(data));
    console.log(this.headerComponent);
    // this.subscription=this.roomsService.getRooms().subscribe(rooms =>{
    // this.roomslist = rooms;
  // });

  }

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });
  selectedroom!:RoomList
  
  selectRoom(room:RoomList){
   this.selectedroom=room;
  }
  addRoom(){
    const room: RoomList={
      roomNumber: '1',
      roomType: 'Delux',
      amenities: 'kitta',
      price: 4,
      photos: 'kitta',
      checkinTime:new Date('10/11/1212'),
      checkoutTime: new Date('10/11/1212'),
      rating: 5
    }
    // this.roomslist.push(room);
    this.roomslist= [...this.roomslist,room]
    this.roomsService.addRoom(room).subscribe((data) =>{
      this.roomslist =data;
    })
    this.router.navigate(['/rooms','add'])
  }

  editRoom(){

    const room: RoomList={
      roomNumber: '3',
      roomType: 'super',
      amenities: 'krishnan',
      price: 4,
      photos: 'kitta',
      checkinTime:new Date('10/11/1212'),
      checkoutTime: new Date('10/11/1212'),
      rating: 5
    }
    this.roomsService.editRoom(room).subscribe((data) =>{
      this.roomslist =data;
  })

}
deleteRoom(){
  this.roomsService.delete(`3`).subscribe((data)=>{
    this.roomslist = data;
  })
}

ngOnDestroy(){
  if(this.subscription){
this.subscription.unsubscribe();
  }
}

}

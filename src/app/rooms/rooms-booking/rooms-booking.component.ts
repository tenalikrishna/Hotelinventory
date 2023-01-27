import { map, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent {

  id: number =0;
  id$= this.router.params.pipe(
    map(params => params['roomid'])
  )
  constructor(private router: ActivatedRoute){}


  ngOnInit(): void{
  // this.router.params.subscribe((params) => {console.log(this.id=params['roomid']);});

  // this.router.paramMap.subscribe((params) => { params.get('roomid');})  when we have multiple values we can use this param map

  // this.id$ = this.router.params.pipe(
  //   map(params => params['roomid'])
  // )

  }
}
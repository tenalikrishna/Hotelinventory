import { BookingService } from './booking.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './../service/config.service';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  bookingForm!:FormGroup;

  get guests(){
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private configservice:ConfigService ,private fb:FormBuilder, private bookingService: BookingService){}

  ngOnInit():void{

  this.bookingForm= this.fb.group({
  roomId: [''],
  guestName: ['',[Validators.required, Validators.minLength(5)]],
  guestEmail: ['',[Validators.required]],
  checkinDate: [''],
  checkoutDate: [''],
  bookingStatus: [''],
  bookingAmount: [''],
  bookingDate: [''],
  mobileNumber: [''],
  
 address:this.fb.group({
  addressLine1: ['',[Validators.required]],
  addressLine2:[''],
 City: ['',[Validators.required]],
  State: ['',[Validators.required]],
  Country: [''],
ZipCode: ['',[Validators.required]],
 }),
 guests: this.fb.array([
  this.fb.group({guestName:['',{validators: [Validators.required]}], age:['']})
 ]),
 tnc: new FormControl(false, {validators: [Validators.required]}),
  },
  {
    updateOn:'blur',
  });
  
  this.getBookingData();
  
this.bookingForm.valueChanges.pipe(
  mergeMap((data)=>this.bookingService.bookRoom(data))
).subscribe((data)=>console.log(data));
  }

addBooking(){
  console.log(this.bookingForm.getRawValue());
  this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data)=>{console.log(data)});
    
}


getBookingData(){

  this.bookingForm.patchValue({
    roomId: '' ,
    guestName:'' ,
    guestEmail: '',
    checkinDate:'',
    checkoutDate: '',
    bookingStatus:'' ,
    bookingAmount: '',
    bookingDate: '',
    mobileNumber: '',
    
   address:this.fb.group({
    addressLine1: '',
    addressLine2:'',
   City: '',
    State:'',
    Country: '',
  ZipCode:'' ,
   }),
   guests: this.fb.array([
    this.fb.group({guestName:'', age:''})
   ]),
   tnc: new FormControl(false)
    })



}












addGuest(){
this.guests.push(
  this.fb.group({guestName:['',{validators: [Validators.required]}], age:['']})
);
}
addPassport(){
  this.bookingForm.addControl('passport',new FormControl(''));
}
deletePassport(){
  if(this.bookingForm.get('passport')){
this.bookingForm.removeControl('passport');
  }
}
RemoveGuest(i:number){
  this.guests.removeAt(i);

}
}



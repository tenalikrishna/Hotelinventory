import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { RoomsComponent } from './rooms/rooms.component';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  
  
  title = 'hotelinventoeyapp';
  

  @ViewChild ('user',{read: ViewContainerRef}) vcr!:ViewContainerRef;
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
  }
   constructor(private router:Router){

   } 
  ngOnInit(){

    // this.router.events.subscribe((event)=>{
    //  console.log(event);
    // })
    this.router.events.pipe(
       filter((event)=> event instanceof NavigationStart)
     ).subscribe((event) => {
       console.log('Navigation Started')
     });
  }
 // example for events of route 

}

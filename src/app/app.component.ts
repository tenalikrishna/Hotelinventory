import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

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
  
}

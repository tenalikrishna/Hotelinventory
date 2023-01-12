import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges {
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
}
@Input() rooms: RoomList[]=[];
@Input() title:string='';

@Output() SelectedRoom = new EventEmitter<RoomList>();

SelectRoom(room:RoomList){
  this.SelectedRoom.emit(room);
}
}


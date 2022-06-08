import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
// aik component sa dosray component ma data send or reecive karnay
// ka liya hum rxjs use kartay han

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  _Subject = new ReplaySubject(1);
  constructor() { }
  
  SendMessageWithData(PlayLoad:Boolean){
    this._Subject.next(PlayLoad);
  }
  
  GetMessageWithData(){
      return this._Subject.asObservable();
  }
}

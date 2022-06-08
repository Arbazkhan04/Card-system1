import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/sharedportal/messenger.service';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit {
  Data:any;
  constructor(
    private _MessengerSevices:MessengerService
  ) { }

  ngOnInit(): void {
    this._MessengerSevices.GetMessageWithData().subscribe((DataComingFromMyMessengerService:any)=>{
      this.Data=DataComingFromMyMessengerService;
      // yahan hum is liya Data ko nahi initialized kar sakta q ka observable ma data bohut sara a raha hota ha
    }) 
    console.log(this.Data)
   }

}

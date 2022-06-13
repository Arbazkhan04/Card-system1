import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/sharedportal/messenger.service';
import { ServicesService } from 'src/app/sharedportal/services.service';

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit {
  Data:any;
  SerivceData:any=[];
  FilteredArray:any = [];

  constructor(
    private _MessengerSevices:MessengerService,
    private _MyServiceData:ServicesService
  ) { }

  ngOnInit(): void {
    this._MessengerSevices.GetMessageWithData().subscribe((DataComingFromMyMessengerService:any)=>{
      this.Data=DataComingFromMyMessengerService;
      // yahan hum is liya Data ko nahi initialized kar sakta q ka observable ma data bohut sara a raha hota ha
    }) 
    // console.log(this.Data)
    this.DataComingFromMyService()
   }

   DataComingFromMyService(){
     this.SerivceData=this._MyServiceData.getdata()
    //  console.log(this.SerivceData);
     this.FilteredArray=this.SerivceData.filter((Result:any)=>{return Result.id==this.Data});
     console.log(this.FilteredArray)
     
     

   }

}

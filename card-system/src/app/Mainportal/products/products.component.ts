import { Component, OnInit } from '@angular/core';
import {ServicesService} from 'src/app/sharedportal/services.service'
import {Router} from '@angular/router';
import { MessengerService } from 'src/app/sharedportal/messenger.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 MyArray:any=[]
  constructor(
    private myservices:ServicesService,
    private Router:Router,
    private _MessengerServices:MessengerService
  ) {}

  ngOnInit(): void {
    this.GetdatafromService()
   
  }
  GetdatafromService(){
    this.MyArray=this.myservices.getdata();
    console.log(this.MyArray)
  }
  goToViewProducts(id:any){
    this.Router.navigate(['view-card']);
    this._MessengerServices.SendMessageWithData(id);
    
  }

}

import { Component, OnInit } from '@angular/core';
import {ServicesService} from 'src/app/sharedportal/services.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 MyArray:any=[]
  constructor(
    private myservices:ServicesService
  ) {}

  ngOnInit(): void {
    this.GetdatafromService()
   
  }
  GetdatafromService(){
    this.MyArray=this.myservices.getdata();
    console.log(this.MyArray)
  }

}

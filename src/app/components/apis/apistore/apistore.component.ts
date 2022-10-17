import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiStore } from 'src/app/models/apistore.model';
import { ApistoreService } from 'src/app/services/apistore.service';

@Component({
  selector: 'app-apistore',
  templateUrl: './apistore.component.html',
  styleUrls: ['./apistore.component.css']
})
export class ApistoreComponent implements OnInit {

  apiStoreModel:ApiStore=new ApiStore
  public products: Array<ApiStore> = [];

  constructor(private httpClient:HttpClient,private _apiStoreService:ApistoreService) { }

  ngOnInit(): void {
  }

  getProducts(){
    this._apiStoreService.getProducts()
    .subscribe({
      next:(response)=>{
        this.products=response;
        console.log(response);

      }


    })
  }


}

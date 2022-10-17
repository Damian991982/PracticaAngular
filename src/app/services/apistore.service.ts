import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiStore } from '../models/apistore.model';

@Injectable({
  providedIn: 'root'
})
export class ApistoreService {

  apistorepoint:string='https://fakestoreapi.com/products'
  //url=environment.endpoint + this.apistorepoint
  url=this.apistorepoint;

  constructor(private http:HttpClient) { }

  public getProducts():Observable<Array<ApiStore>>{
    return this.http.get<Array<ApiStore>>(this.url);
  }
}

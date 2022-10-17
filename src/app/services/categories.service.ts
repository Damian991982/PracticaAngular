import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

 private myAppUrl:string=environment.endpoint;
 private myApiUrl:string='api/Categories/';

  constructor(private http:HttpClient) { }

  getCategories():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getCategorie(id:number):Observable<Categorie>{
    return this.http.get<Categorie>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(`${this.myAppUrl}${this.myApiUrl}`, categorie);
  }
  updateCategorie(id: number, categorie: Categorie): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, categorie);
  }

  deleteCategorie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);

  }
}

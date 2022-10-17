import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {




categories:Categorie[]=[
  /*{
  categoryID:1,
    categoryName:'Lacteos',
    description:'Leche',
    picture:''
 }*/
]

  constructor(private _categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
    //this.categories.push();
  }

  getCategories(){
    this._categoriesService.getCategories()
    .subscribe({
      next:(data)=>{
        this.categories=data;
        console.log(data);
      },
      error:(response)=>{
        console.log(response);
      }

    })
  }



}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie.model';
import { CategoriesService } from 'src/app/services/categories.service';


@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  Form:FormGroup;

  minLengthCategoryName: number = 4;
  maxLengthCategoryName: number = 15;

  maxLengthDescription: number = 255;

  addCategorieRequest:Categorie={
    CategoryID:0,
    CategoryName:'',
    Description:'',
    Picture:''
  }
  constructor(private fb:FormBuilder,private _categoriesService:CategoriesService,private router:Router) {

    this.Form = this.fb.group({
      CategoryName : ['', [Validators.required, Validators.minLength(this.minLengthCategoryName),
         Validators.maxLength(this.maxLengthCategoryName)]],
      Description : ['', [Validators.maxLength(this.maxLengthDescription)]]
    })


   }


   notValidField(field: string){

    return this.Form.controls[field].errors
        && this.Form.controls[field].touched;
  }

  ngOnInit(): void {


  }

  addCategorie(){
    this._categoriesService.addCategorie(this.addCategorieRequest)
    .subscribe({

      next:(data)=>{

        this.Form.reset();

        this.router.navigate(['categories']);
      }

    })

  }

}

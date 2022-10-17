import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent implements OnInit {

  Form:FormGroup;

  minLengthCategoryName: number = 4;
  maxLengthCategoryName: number = 15;

  maxLengthDescription: number = 255;

  editCategorieRequest:Categorie={
    CategoryID:0,
    CategoryName:'',
    Description:'',
    Picture:''
  }

  categorieDetails:Categorie={
    CategoryID:0,
    CategoryName:'',
    Description:'',
    Picture:''

  }

  constructor(private fb:FormBuilder,private _categoriesService:CategoriesService,private route:ActivatedRoute,private router:Router) {
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
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id= params.get('id');

        if(id){
          this._categoriesService.getCategorie(parseInt(id))
          .subscribe({
            next:(response)=>{
              this.categorieDetails=response;

            }

          })
        }

      }
    })
  }

  editCategorie(){

    this._categoriesService.updateCategorie(this.categorieDetails.CategoryID,this.categorieDetails)
    .subscribe({
      next:(response)=>{
        this.Form.reset();
        this.router.navigate(['categories']);

      }
    })

  }

  deleteCategorie(id:number){
    this._categoriesService.deleteCategorie(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['categories']);

      }

    });

  }

}

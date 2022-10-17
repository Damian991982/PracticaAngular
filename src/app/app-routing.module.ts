import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApistoreComponent } from './components/apis/apistore/apistore.component';
import { AddCategoriesComponent } from './components/categories/add-categories/add-categories.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { EditCategoriesComponent } from './components/categories/edit-categories/edit-categories.component';
import { HomeComponent } from './layout/home/home.component';
import { WorksComponent } from './layout/works/works.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'works',component:WorksComponent},
  {path:'categories',component:CategoriesListComponent},
  {path:'addCategorie',component:AddCategoriesComponent},
  {path:'editCategories/:id',component:EditCategoriesComponent},
  {path:'apistore',component:ApistoreComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCategoriesComponent } from './components/categories/add-categories/add-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCategoriesComponent } from './components/categories/edit-categories/edit-categories.component';
import { ApistoreComponent } from './components/apis/apistore/apistore.component';
import { WorksComponent } from './layout/works/works.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CategoriesListComponent,
    AddCategoriesComponent,
    EditCategoriesComponent,
    ApistoreComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

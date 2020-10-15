import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{CommonModule} from '@angular/common';
import{FormsModule} from '@angular/forms'

import{InputTextModule} from 'primeng/inputtext';
import{CardModule} from 'primeng/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    CardModule,
    BrowserModule,
    FormsModule,
     
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

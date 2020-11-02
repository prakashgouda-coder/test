import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{CommonModule} from '@angular/common';
import{FormsModule} from '@angular/forms'

import{InputTextModule} from 'primeng/inputtext';
import{CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

import {PrimengModule} from './primeng/primeng.module';
import{UsersModule} from './users/users.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { from } from 'rxjs';
import { ServiceService } from './service.service';

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
    UsersModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    BrowserModule,
    FormsModule,
    PrimengModule,
    AppRoutingModule
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

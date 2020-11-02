import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';

import{BrowserModule} from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
 

@NgModule({
  declarations: [LoginComponent, EmployeeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[LoginComponent]
})
export class UsersModule { }

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
title='EmployeeFrontEnd';
data:any;
EmpForm:FormGroup;
submitted=false;
EventValue:any='Save';

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
this.getData();
this.EmpForm=new FormGroup({
  empId:new FormControl(null),
  empName:new FormControl("",[Validators.required]),
  empContact:new FormControl("",[Validators.required]),
  empEmail:new FormControl("",[Validators.required]),
  empAddress:new FormControl("",[Validators.required])
})
  }

  getData(){
    this.service.getData().subscribe((result:any[])=>{
      this.data=result;
    });
  }
  Save(){
    this.submitted=true;
    if(this.EmpForm.invalid){
      return;
    }
    this.service.postData(this.EmpForm.value).subscribe((result:any[])=>{
      this.data=result;
this.resetForm();
    }) 
  }
 
  Update(){
    this.submitted=true;
    if(this.EmpForm.invalid){
      return;
    }
    this.service.putData(this.EmpForm.value.empId,this.EmpForm.value).subscribe((result:any[])=>{
      this.data=result;
      this.resetForm();
    })
  }

  deleteData(id){
this.service.deleteData(id).subscribe((result:any[])=>{
  this.data=result;
  this.getData();
})
  }
  resetForm(){
    this.getData();
    this.EmpForm.reset();
this.EventValue='Save';
this.submitted=false;
  }

  EditData(data){
    this.EmpForm.controls["empId"].setValue(data.empId);
    this.EmpForm.controls["empName"].setValue(data.empName);
    this.EmpForm.controls["empContact"].setValue(data.empContact);
    this.EmpForm.controls["empEmail"].setValue(data.empEmail);
    this.EmpForm.controls["empAddress"].setValue(data.empAddress);
this.EventValue="Update";
  }
}

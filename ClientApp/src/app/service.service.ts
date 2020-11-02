import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {
   let httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
   }
   getData(){
     return this.http.get('/api/Employee');
   }

   postData(formData){
     return this.http.post('/api/Employee',formData);
   }

   putData(id,formData){
     return this.http.put('/api/Employee/'+id,formData);
   }

   deleteData(id){
     return this.http.delete('/api/Employee/'+id);
   }
}

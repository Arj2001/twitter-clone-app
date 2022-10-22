import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addUser=(data:any)=>{
    return this.http.post("http://localhost:8080/addUser",data)
  }

  auth=(data:any)=>{
    return this.http.post("http://localhost:8080/auth",data)
  }
}

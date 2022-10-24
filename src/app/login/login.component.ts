import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myApi:ApiService,private myRouter:Router) { }

  email = ""
  password = ""

  readValues=()=>{
    let data = {
      "email":this.email,
      "password":this.password
    }
    console.log(data)
    this.myApi.auth(data).subscribe(
      (resp:any)=>{
        if (resp.length > 0) {
          alert("login successful")
          console.log(resp)
          localStorage.setItem("id",resp[0].id)
          localStorage.setItem("name",resp[0].name)
          this.myRouter.navigate(["/feed"])
        } else {
          alert("Invalid credtionalas")
          console.log("not working")
        }
      }
    )

  }

  ngOnInit(): void {
  }

}

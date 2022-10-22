import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myApi:ApiService) { }

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

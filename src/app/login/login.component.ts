import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  email = ""
  password = ""

  readValues=()=>{
    let data = {
      "email":this.email,
      "password":this.password
    }
    console.log(data)

  }
  
  ngOnInit(): void {
  }

}

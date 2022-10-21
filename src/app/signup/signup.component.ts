import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  name = ""
  dob = ""
  phone = ""
  place = ""
  email = ""
  password = ""

  readValue=()=>{
    let data = {
      "name":this.name,
      "dob":this.dob,
      "phone":this.phone,
      "place":this.place,
      "email":this.email,
      "password":this.password,
    }
    console.log(data)
    this.name = ""
    this.dob = ""
    this.phone = ""
    this.place = ""
    this.email = ""
    this.password = ""
  }

  ngOnInit(): void {
  }

}

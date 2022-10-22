import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  name = ""
  dob = ""
  phone = ""
  place = ""
  email = ""
  password = ""
  confrimPass = ""

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
    this.myApi.addUser(data).subscribe(
      (resp)=>{
        alert(resp)
      }
    )
    this.name = ""
    this.dob = ""
    this.phone = ""
    this.place = ""
    this.email = ""
    this.password = ""
    this.confrimPass = ""
  }

  ngOnInit(): void {
  }

}

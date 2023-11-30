import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  display: any
  constructor(private myApi: ApiService, private myRouter: Router) {
    this.display = "none"
  }

  email = ""
  password = ""

  readValues = () => {
    let data = {
      "email": this.email,
      "password": this.password
    }
    this.display = 'block'
    this.myApi.auth(data).subscribe({
      next: (resp: any) => {
        if (resp.length > 0) {
          alert("Login Successful")
          localStorage.setItem("id", resp[0].id)
          localStorage.setItem("name", resp[0].name)
          this.myRouter.navigate(["/feed"])
        } else {
          hideSpinner()
          alert("Invalid credtionalas")
        }
      },
      error(err) {
        console.error(err)
        hideSpinner()
        alert("Error! Try after sometime")
      },
    })

    const hideSpinner = () =>{
      this.display = 'none'
    }
  }

  ngOnInit(): void {
  }

}

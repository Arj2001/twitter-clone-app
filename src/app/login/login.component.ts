import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myApi: ApiService, private myRouter: Router) {
    
  }

  email = ""
  password = ""

  readValues = () => {
    let data = {
      "email": this.email,
      "password": this.password
    }
    
    AppComponent.loadingDisplay = 'block'
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
      AppComponent.loadingDisplay = 'none'
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';
import { Users } from '../models/users';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myApi: ApiService, protected user: Users, private myRouter: Router) { }
  ngOnInit(): void {
  
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
  }
  passwordMatch: boolean = true
  passwordDisp = 'none';
  passwordFilter = 'none';
  onSubmit = (validForm: boolean | null) => {
    if (validForm) {

      if (this.user.password == this.user.confrimPass) {

        let data = this.user.getJson()

        AppComponent.loadingDisplay = 'block';
        this.myApi.addUser(data).subscribe({
          next: (resp) => {
            AppComponent.loadingDisplay = 'none';
            this.user.clearValues;
            alert("SignUp successed")
            this.myRouter.navigate([""]);
          },
          error: (err) => {
            AppComponent.loadingDisplay = 'none';
            console.log(err)
            alert("Error in signup! Try agian after sometime")
          }
        })
      }
      else {
        this.user.confrimPass = ""
        alert("Password mismatch");
      }
    }
  }

  confirmPassword = () => {
    
    if(this.user.password.length < 6){
      this.passwordFilter = 'block'
      return 0;
    }
    this.passwordFilter = 'none'
    if (this.user.password != this.user.confrimPass) {
      this.passwordDisp = 'block'
      this.passwordMatch = false
      return 0;
    } else {
      this.passwordDisp = 'none'
      this.passwordMatch = true
      return 0;
    }
  }

}

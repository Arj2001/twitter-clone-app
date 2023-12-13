
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Users {

    name!: string;
    dob!: string;
    phone!: string;
    place!: string;
    email!: string;
    password!: string;
    confrimPass!: string;

    getJson() {
        return {
            "name": this.name,
            "dob": this.dob,
            "phone": this.phone,
            "place": this.place,
            "email": this.email,
            "password": this.password,
        }
    }

    clearValues(){
        this.name = ""
        this.dob = ""
        this.phone = ""
        this.place = ""
        this.email = ""
        this.password = ""
        this.confrimPass = ""
    }

    // dummyValues(){
    //     this.name = "Arjun"
    //     this.dob = "07/12/2001"
    //     this.phone = "8292102910"
    //     this.place = "place"
    //     this.email = "arjun@gmail.com"
    //     this.password = "123"
    //     this.confrimPass = "123"
    // }
}
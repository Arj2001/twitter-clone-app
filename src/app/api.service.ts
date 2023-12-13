import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  addUser = (data: any) => {
    console.log("add user")
    return this.http.post("http://localhost:8080/addUser", data, { responseType: 'text' })
  }

  auth = (data: any) => {
    return this.http.post("http://localhost:8080/auth", data)
  }

  addTweet = (data: any) => {
    return this.http.post("http://localhost:8080/addTweet", data, { responseType: 'text' })
  }

  viewTweets = () => {
    return this.http.get("http://localhost:8080/viewTweets")
  }

  viewUserTweets = (user_id: any) => {
    return this.http.post("http://localhost:8080/viewUserTweet", user_id)
  }
  deleteTweets = (id: any) => {
    return this.http.post("http://localhost:8080/deleteTweet", id, { responseType: 'text' })
  }
  editTweets = (id: any) => {
    return this.http.post("http://localhost:8080/editTweet", id, { responseType: 'text' })
  }
}

import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-my-tweets',
  templateUrl: './my-tweets.component.html',
  styleUrls: ['./my-tweets.component.css']
})
export class MyTweetsComponent implements OnInit {
  

  constructor(private myApi:ApiService,private elementRef: ElementRef) {
    this.getMyTweets()
   }

  myTweetsData:any

  getMyTweets=()=>{
    let data = {
      "user_id":localStorage.getItem("id")
    }
    console.log(data)
    this.myApi.viewUserTweets(data).subscribe(
      (resp)=>{
        this.myTweetsData = resp
      }
    )
  }

  delete=(id:any)=>{
    let data = {
      "id":id
    }
    console.log(data)
    this.myApi.deleteTweets(data).subscribe()
    alert("deleted")
    this.getMyTweets()
  }

  editTweet=(id:any)=>{
    let data = {
      "id":id
    }
    
    
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#031633';
    this.elementRef.nativeElement.ownerDocument.body
        .style.color = 'white'
}

}

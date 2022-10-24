import { formatDate } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit,AfterViewInit {

  constructor(private elementRef: ElementRef,private myApi:ApiService) {
    this.getTweets()
  }

  user = localStorage.getItem("name")
  tweet = ""

  readValues=()=>{
    let data = {
      "user_id":localStorage.getItem("id"),
      "name":this.user,
      "tweets":this.tweet,
      "datetime":formatDate(new Date(),'yyyy-MM-dd h:mm:ss','en')
    }
    this.myApi.addTweet(data).subscribe(
      (resp)=>{
        alert(resp);
      }
    )
    this.getTweets()
    console.log(data)
    this.tweet = ""
    alert("Tweeted")
    this.getTweets()
  }

  getTweets=()=>{
    this.myApi.viewTweets().subscribe(
      (resp)=>{
        this.tweetsData = resp
      }
    )
  }
  
  tweetsData:any
  tweetOwner:any

  ngOnInit(): void {

  } 
  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundColor = '#031633';
      this.elementRef.nativeElement.ownerDocument.body
          .style.color = 'white'
  }
}


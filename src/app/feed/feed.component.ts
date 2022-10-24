import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit,AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  user = localStorage.getItem("name")
  tweet = ""

  readValues=()=>{
    let data = {
      "id":localStorage.getItem("id"),
      "tweet":this.tweet
    }
    console.log(data)
  }
  
  counter(i: number) {
    return new Array(i);
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


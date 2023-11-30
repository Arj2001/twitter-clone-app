import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twitter-clone-app';
  public static loadingDisplay = 'none';
  
  public get getDisplay() : string {
    return AppComponent.loadingDisplay
  }
  
}

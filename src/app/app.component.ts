import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isToShowToster:boolean = true;

  closeTosterMessage() {
    this.isToShowToster = false;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  xx = 0;
  title = 'app';
  onDataChange(event) {
    console.log(event);
    this.xx = event;
  }
}

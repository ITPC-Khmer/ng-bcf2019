import {Component, OnInit} from '@angular/core';
import {HelperService} from '../models/helper.service';
import {Row} from '../models/row';
import {Ng2DeviceService} from 'ng2-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    HelperService
  ]
})
export class HomeComponent implements OnInit {
  // data: Observable<Home[]>;
  isMobile: boolean;
  rows: Row[];
  rows2: Row[];
  constructor(private H: HelperService, private deviceService: Ng2DeviceService) {}

  getData(): void {
    this.H.getJson('http://127.0.0.1:8000/api/xyz')
      .subscribe(
        resultArray => {
          this.rows = this.H.chunk(resultArray, 2);
        } ,
        error => console.log('Error :: ' + error),
        () => {
          console.log( this.rows);
        }
      );

    this.H.getJson('http://127.0.0.1:8000/api/xyz')
      .subscribe(
        resultArray => {
          this.rows2 = this.H.chunk(resultArray, 4);
        } ,
        error => console.log('Error :: ' + error),
        () => {
          console.log( this.rows2);
        }
      );
  }



  ngOnInit() {
    this.getData();
    this.isMobile = this.deviceService.isMobile();
  }
}

import {Component, OnInit} from '@angular/core';
import {HelperService} from '../models/helper.service';
import {Row} from '../models/row';
import {Ng2DeviceService} from 'ng2-device-detector';
import {JsonpPage} from '../models/jsonp-page';
import 'rxjs/add/operator/map';
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
  jsonpPage: JsonpPage;
  isMobile: boolean;
  rows: Row[];
  rows2: Row[];
  loading = false;
  total = 1000;
  page = 1;
  limit = 20;
  apiURL = 'http://localhost:8000/jsonp/get-company?callback=JSONP_CALLBACK';
  apiURL2 = 'http://localhost:8000/jsonp/get-company2?callback=JSONP_CALLBACK';

  constructor(private H: HelperService, private deviceService: Ng2DeviceService) {}

  getData(apiURL: any): void {
    // const apiURL = 'http://localhost:8000/jsonp/get-company?callback=JSONP_CALLBACK';
    this.H.getJsonP(apiURL)
      .subscribe(
        resultArray => {
          this.jsonpPage = resultArray;
          if (this.jsonpPage.data) {
            this.rows = this.H.chunk(this.jsonpPage.data, 2);
          }
        } ,
        error => console.log('Error :: ' + error),
        () => {
          console.log( this.rows);
          this.isMobile = this.deviceService.isMobile();
        }
      );
  }

  getData2(apiURL: any): void {
    // const apiURL = 'http://localhost:8000/jsonp/get-company?callback=JSONP_CALLBACK';
    this.H.getJsonP(apiURL)
      .subscribe(
        resultArray => {
          this.jsonpPage = resultArray;
          if (this.jsonpPage.data) {
            this.rows2 = this.H.chunk(this.jsonpPage.data, 4);
          }
        } ,
        error => console.log('Error :: ' + error),
        () => {
          console.log( this.rows2);
          this.isMobile = this.deviceService.isMobile();
        }
      );
  }

  ngOnInit() {
    this.getData(this.apiURL);
    this.getData2(this.apiURL2);
  }
  goToPage(n: number): void {
    // this.page = n;
    this.getData(this.apiURL + `&page=${n}`);
  }

  onNext(): void {
    this.jsonpPage.current_page++;
    this.getData(this.apiURL + `&page=${this.jsonpPage.current_page}`);
  }

  onPrev(): void {
    this.jsonpPage.current_page--;
    this.getData(this.apiURL + `&page=${this.jsonpPage.current_page}`);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Home} from '../models/home';
import {HelperService} from '../models/helper.service';
import {Row} from '../models/row';

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
  data: Home[];
  rows: Row[];
  constructor(private H: HelperService) {}

  getData(): void {
    this.H.getJson('http://localhost:8000/api/xyz')
      .subscribe(
        resultArray => this.rows = this.H.chunk(resultArray, 2),
        error => console.log('Error :: ' + error),
        () => {
          console.log( this.data);
        }
      );
  }

  ngOnInit() {
    // this.rows = this.H.chunk([1, 2, 3, 4, 5, 6, 7, 8], 2);
    this.getData();
  }
}

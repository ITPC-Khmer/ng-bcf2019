import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {Row} from './row';

@Injectable()
export class HelperService {
  private chunkArr = [];
  constructor(private http: Http) { }

  chunk(myArray, chunk_size) {

    while (myArray.length) {
      this.chunkArr.push(myArray.splice(0, chunk_size));
    }

    return this.chunkArr;
  }

  getJson(url, p: URLSearchParams = null): any {
    // const params = new URLSearchParams();
    // p.set('format', 'json');
    if (p != null) {
      return this.http
        .get(url, {search: p})
        .map((response: Response) => {
          console.log(response);
          return <Row[]>response.json();
        });
    }else {
      return this.http
        .get(url)
        .map((response: Response) => {
          console.log(response);
          return <Row[]>response.json();
        });
    }
  }
}

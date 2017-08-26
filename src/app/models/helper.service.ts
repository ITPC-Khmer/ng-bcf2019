import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {Row} from './row';

@Injectable()
export class HelperService {

  constructor(private http: Http) { }
  chunk(arr, groupsize) {
    const sets = [];
    let chunks: number;
    let i = 0;
    chunks = arr.length / groupsize;
    while ( i < chunks) {
      sets[i] = arr.splice(0, groupsize);
      i++;
    }
    return sets;
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

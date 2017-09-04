import { Injectable } from '@angular/core';
import {Http, Jsonp, Response, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {Row} from './row';
import {JsonpPage} from './jsonp-page';

@Injectable()
export class HelperService {
  // private chunkArr = [];
  constructor(private http: Http, private jsonp: Jsonp) { }

  chunk(myArray, chunk_size) {
    const chunkArr = [];
    while (myArray.length) {
      chunkArr.push(myArray.splice(0, chunk_size));
    }

    return chunkArr;
  }

  getJsonP(url, p: URLSearchParams = null): any {
    // const params = new URLSearchParams();
    // p.set('format', 'json');
    if (p != null) {
      return this.jsonp
        .get(url, {search: p})
        .map((res: Response) => <JsonpPage[]> res.json());
        /*.map((response: Response) => {
          console.log(response);
          return <Row[]>response.json();
        });*/
    }else {
      return this.jsonp
        .get(url)
        .map((res: Response) => <JsonpPage[]> res.json());
    }
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

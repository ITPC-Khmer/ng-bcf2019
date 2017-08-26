///<reference path="../../node_modules/rxjs/add/operator/map.d.ts"/>
import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {Home} from './models/home';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GetHomeService {

  constructor(private http: Http) {
  }

  private homeUrl = 'http://localhost:8000/api/xyz';

  getHome(): Observable<Home[]> {
    return this.http
      .get(this.homeUrl)
      .map((response: Response) => {
        console.log( response);
        return <Home[]>response.json();
      });


   /* const params = new URLSearchParams();
    params.set('format', 'json');
    return this.http
      .get(this.homeUrl)
      // .get(this.homeUrl, {search: params})
      .map((res: Response, index) => res.json());
      // .map(response => <Home[]> response.json().petfinder.pets.pet);*/
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  /*getHome(): Promise<Home[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this._getHome()), 2000);
    });
  }*/
}

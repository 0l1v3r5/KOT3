// Core Components
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { ForismaticApiGlobal } from '../models/forismaticapi-global.model';

@Injectable()
export class ForismaticApiService {

  private baseUrl:        string = 'http://api.forismatic.com/api/1.0/';
  private responseFormat: string = 'json';
  private lang:           string = 'en';
  private key:            string = '457653';

  // http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en

  constructor(private http: Http) {

  }

  public getQuote(): Promise<ForismaticApiGlobal> {
    const url = `${this.baseUrl}?method=getQuote&key=${this.key}&format=${this.responseFormat}&lang=${this.lang}`;
    // var url = this.baseUrl + '?method=getQuote&key=' + this.key + '&format=' + this.responseFormat + '&lang=' + this.lang;

    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as ForismaticApiGlobal)
    .catch(error => console.log('Une erreur est survenu ' + error))
  }
}

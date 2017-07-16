// Core Components
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { UnsplashApiGlobal } from '../models/unsplashapi-global.model';

@Injectable()
export class UnsplashApiService {

  private baseUrl:         string = 'https://api.unsplash.com/';
  private methodToUse:     string = 'photos/random';
  private queryToUse:      string = '';
  private clientId:        string = '47fa2b73e3a11575a1be4fcb44d4a787ee57c2b306d57fcd53ad7214f215240d';
  private widthToUse:      number = 320;
  private heightToUse:     number = 480;
  // https://api.unsplash.com/photos/?client_id=47fa2b73e3a11575a1be4fcb44d4a787ee57c2b306d57fcd53ad7214f215240d
  // https://api.unsplash.com/search/photos?client_id=47fa2b73e3a11575a1be4fcb44d4a787ee57c2b306d57fcd53ad7214f215240d&query=mind&page=1&per_page=5
  // https://api.unsplash.com/photos/random?client_id=47fa2b73e3a11575a1be4fcb44d4a787ee57c2b306d57fcd53ad7214f215240d&query=car&w=500&h=500
  
  constructor(private http: Http) {

  }

  public getImages(): Promise<UnsplashApiGlobal> {
    const url = `${this.baseUrl}${this.methodToUse}?client_id=${this.clientId}&query=${this.queryToUse}&w=${this.widthToUse}&h=${this.heightToUse}`;

    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as UnsplashApiGlobal)
    .catch(error => console.log('Une erreur est survenu a propos de l\'image' + error))
  }
}

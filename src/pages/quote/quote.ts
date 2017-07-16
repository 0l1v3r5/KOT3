import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ForismaticApiGlobal }  from '../../models/forismaticapi-global.model';
import { ForismaticApiService } from '../../services/forismatic.service';
import { UnsplashApiGlobal }  from '../../models/unsplashapi-global.model';
import { UnsplashApiService } from '../../services/unsplash.service';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {

  quote: ForismaticApiGlobal = new ForismaticApiGlobal();
  backgroundImage: UnsplashApiGlobal = new UnsplashApiGlobal();

  constructor(public navCtrl: NavController, private unsplashApiService: UnsplashApiService, private forismaticApiService: ForismaticApiService) {

    this.forismaticApiService.getQuote()
    .then(quoteFetched => {
      this.quote = quoteFetched;
      console.log(this.quote);
    });

    this.unsplashApiService.getImages()
    .then(backgroundImageFetched => {
      this.backgroundImage = backgroundImageFetched;
      console.log(this.backgroundImage);
    });

  }

}

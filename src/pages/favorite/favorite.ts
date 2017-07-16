import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})
export class FavoritePage {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
   let currentIndex = this.slides.getActiveIndex();
   console.log('Current index is', currentIndex);
  }

  private showFavorite(){
    this.navCtrl.push(FavoritePage );
  }

}

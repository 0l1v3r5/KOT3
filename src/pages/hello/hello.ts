import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html'
})
export class HelloPage {

  constructor(public navCtrl: NavController) {

  }

  private showQuote(){
    this.navCtrl.push(QuotePage );
  }

}

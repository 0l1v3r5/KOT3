import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { HelloPage } from '../hello/hello';
import { FavoritePage } from '../favorite/favorite';
import { QuotePage } from '../quote/quote';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AboutPage;
  tab2Root = QuotePage;
  tab3Root = HelloPage;
  tab4Root = FavoritePage;

  constructor() {

  }

}

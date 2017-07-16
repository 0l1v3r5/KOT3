import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp }      from './app.component';

// Pages
import { HomePage }       from '../pages/home/home';
import { HelloPage }      from './../pages/hello/hello';
import { QuotePage }      from './../pages/quote/quote';
import { TabsPage }       from '../pages/tabs/tabs';
import { AboutPage }      from '../pages/about/about';
import { FavoritePage }   from './../pages/favorite/favorite';

import { ForismaticApiService } from '../services/forismatic.service';
import { UnsplashApiService }   from '../services/unsplash.service';
import { HttpModule }           from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HelloPage,
    QuotePage,
    TabsPage,
    AboutPage,
    FavoritePage,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HelloPage,
    QuotePage,
    TabsPage,
    AboutPage,
    FavoritePage,
  ],
  providers: [
    ForismaticApiService,
    UnsplashApiService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}

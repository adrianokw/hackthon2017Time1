import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetalhesDaTroca } from '../pages/detalhesDaTroca/detalhesDaTroca';
import { PropostasDoMeuInteressePage } from '../pages/propostasdemeuinteresse/propostasdemeuinteresse';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TrocaApi } from './api/troca.api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PropostasDoMeuInteressePage,
    DetalhesDaTroca
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PropostasDoMeuInteressePage,
    DetalhesDaTroca
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TrocaApi
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataServiceProvider } from '../providers/data-service/data-service';
import{ActionSheetPage}from '../pages/action-sheet/action-sheet';
import{FabsPage}from '../pages/fabs/fabs';
import{CardsPage}from '../pages/cards/cards';
import{AscontrollerPage}from '../pages/ascontroller/ascontroller';
import{AlertcontrollerPage}from '../pages/alertcontroller/alertcontroller';
import{TabsPage,BasicPage}from '../pages/tabs/tabs';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetPage,FabsPage,CardsPage,AscontrollerPage
    ,AlertcontrollerPage,TabsPage,BasicPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetPage,FabsPage,CardsPage,AscontrollerPage
    ,AlertcontrollerPage,TabsPage,BasicPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider,
  ]
})
export class AppModule {}

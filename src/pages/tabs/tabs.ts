import { Component,ViewChild } from '@angular/core';

import { Platform } from 'ionic-angular';


@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Tabs</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
  </ion-content>
`})
export class TabsPage {
isAndroid: boolean = false;

constructor(platform: Platform) {
  this.isAndroid = platform.is('android');
}
}

@Component({
  selector: 'page-tabs',
  template: `
  <ion-tabs class="tabs-basic">
    <ion-tab tabTitle="Music" [root]="rootPage"></ion-tab>
    <ion-tab tabTitle="Movies" [root]="rootPage"></ion-tab>
    <ion-tab tabTitle="Games" [root]="rootPage"></ion-tab>
  </ion-tabs>
`})
export class BasicPage {
rootPage = TabsPage;
}




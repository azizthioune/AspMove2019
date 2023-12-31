import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { FIREBASE_CONFIG } from './firebase.credentials';
import { initializeApp } from "firebase";

//import { HomePage } from '../pages/home/home';
import { MenuPage } from "../pages/menu/menu";
import { LoginPage } from "../pages/login/login";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
  rootPage:any;




  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    initializeApp(FIREBASE_CONFIG);
  
   
var that = this;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        that.rootPage = MenuPage;
        // ...
      } else {
        // User is signed out.
        // ...
        that.rootPage = LoginPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

 
}




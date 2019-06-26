import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersserviceProvider } from '../providers/usersservice/usersservice';
import { AddtrajetserviceProvider } from '../providers/addtrajetservice/addtrajetservice';
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { MenuPage } from "../pages/menu/menu";
import { AjoutTrajetPage } from "../pages/ajout-trajet/ajout-trajet";
import { DetailsTrajetPage } from "../pages/details-trajet/details-trajet";
import { ProfilPage } from "../pages/profil/profil";
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    MenuPage,
    AjoutTrajetPage,
    DetailsTrajetPage,
    ProfilPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    MenuPage,
    AjoutTrajetPage,
    DetailsTrajetPage,
    ProfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersserviceProvider,
    AddtrajetserviceProvider
  ]
})
export class AppModule {}

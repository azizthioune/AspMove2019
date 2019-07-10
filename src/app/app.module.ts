import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen/';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersserviceProvider } from '../providers/usersservice/usersservice';
import { AddtrajetProvider } from '../providers/addtrajetservice/addtrajet.service';
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { MenuPage } from "../pages/menu/menu";
import { AjoutTrajetPage } from "../pages/ajout-trajet/ajout-trajet";
import { DetailsTrajetPage } from "../pages/details-trajet/details-trajet";
import { ProfilPage } from "../pages/profil/profil";

import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/Auth';






import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { Camera } from "@ionic-native/camera";
import { File } from "@ionic-native/file";
import { FirebaseserviceProvider } from '../providers/firebaseservice/firebaseservice';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    MenuPage,
    AjoutTrajetPage,
    DetailsTrajetPage,
    ProfilPage,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
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
    SplashScreen, Camera, File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersserviceProvider,
    AddtrajetProvider,
    FirebaseserviceProvider
  ]
})
export class AppModule {}

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
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/Auth';






import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { Camera } from "@ionic-native/camera";
import { File } from "@ionic-native/file";
import { FirebaseserviceProvider } from '../providers/firebaseservice/firebaseservice';
import { AproposPage } from "../pages/apropos/apropos";
import { MestrajetsPage } from "../pages/mestrajets/mestrajets";
import { ContactPage } from "../pages/contact/contact";
import { MethodProvider } from '../providers/method/method';
import { IonicImageViewerModule } from 'ionic-img-viewer';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AproposPage,
    LoginPage,
    SignupPage,
    MenuPage,
    AjoutTrajetPage,
    DetailsTrajetPage,
    ProfilPage,
    MestrajetsPage,
    ContactPage,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AproposPage,
    LoginPage,
    SignupPage,
    MenuPage,
    AjoutTrajetPage,
    DetailsTrajetPage,
    ProfilPage,
    MestrajetsPage,
    ContactPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen, Camera, File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersserviceProvider,
    AddtrajetProvider,
    FirebaseserviceProvider,
    MethodProvider
  ]
})
export class AppModule {}

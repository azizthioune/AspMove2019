import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";
import { ProfilPage } from "../profil/profil";
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { SignupPage } from "../signup/signup";
import * as firebase from "firebase";
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/Auth';
import { AproposPage } from "../apropos/apropos";





/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

   
 // public userProfilList = this.db.object<Account>('userProfile');

  rootPage : any;
  userProfilList: Observable<Account[]>
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public usersserviceProvider:UsersserviceProvider,
    private afAuth: AngularFireAuth, private db: AngularFireDatabase, public toast: ToastController) {
    this.rootPage = HomePage;

    this.userProfilList = this.usersserviceProvider.getAccount()
    .snapshotChanges()
    .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });

   
}
        
  
  

    
  logOut(){
    return firebase.auth().signOut();
  }  

  profil(){
    this.navCtrl.push(ProfilPage);
  }  

  apropos(){
    this.navCtrl.push(AproposPage);
  }  

 

  ionViewDidLoad() {
   this.afAuth.authState.take(1).subscribe(data =>{
     if(data && data.email && data.uid){
       this.toast.create({
         message: `Welcome to AspMove, ${data.email}`,
         duration: 3000
       }).present();

 //  this.userProfilList = this.db.object(`userProfile/${data.uid}`)

     }
   })
  }

}

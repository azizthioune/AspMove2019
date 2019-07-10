import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";
import { ProfilPage } from "../profil/profil";
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { SignupPage } from "../signup/signup";


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
  rootPage : any;
  userProfilList: Observable<Account[]>
  constructor(public navCtrl: NavController, public navParams: NavParams,private usersserviceProvider:UsersserviceProvider) {
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
    this.navCtrl.setRoot(LoginPage);
  }  

  profil(){
    this.navCtrl.push(ProfilPage);
  }  

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}

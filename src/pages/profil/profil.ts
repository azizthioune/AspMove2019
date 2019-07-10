import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { SignupPage } from "../signup/signup";

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  userProfilList: Observable<Account[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private usersserviceProvider:UsersserviceProvider  ) {
    this.userProfilList = this.usersserviceProvider.getAccount()
    .snapshotChanges()
    .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  

}

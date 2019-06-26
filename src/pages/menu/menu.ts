import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";
import { AjoutTrajetPage } from "../ajout-trajet/ajout-trajet";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = HomePage;

  }

  logOut(){
    this.navCtrl.setRoot(LoginPage);
  }  

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}

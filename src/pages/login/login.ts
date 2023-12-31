import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from "../home/home";
import { SignupPage } from '../signup/signup';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import 'rxjs/Rx';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MenuPage } from "../menu/menu";



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UsersserviceProvider]
})
export class LoginPage {

  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, 
  public toastCtrl: ToastController,public usersService: UsersserviceProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin(){

    var that = this;

    var loader = this.loadingCtrl.create({
      content: "Please Wait..."
    });
    loader.present();

    this.usersService.loginUserService(this.email, this.password).then(authData => {
      //successful
      loader.dismiss();
      that.navCtrl.setRoot(HomePage);

    },error => {
      loader.dismiss();
      //Unable to log in
        let toast = this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'top'
        });
        toast.present();

      that.password="" //Empty the password field  

    });


  }

  forgotPassword(){

  }

  redirectToSignup(){
    this.navCtrl.push(SignupPage);
  }

  

}

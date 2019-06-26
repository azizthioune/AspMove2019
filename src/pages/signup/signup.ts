import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import { HomePage } from "../home/home";
import 'rxjs/Rx';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [UsersserviceProvider]
})
export class SignupPage {


  public cin: number;
  public birth: Date;
  public prenom: any;
  public nom: any;
  public email: any;
  public telephone: any;
  public ville: any;
  public quartier: any;
  public password: any;
  public cpassword: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public UsersserviceProvider: UsersserviceProvider, public loadingCtrl: LoadingController,
      public toastCtrl: ToastController, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  doSignup(){
    var   account = {
      cin: this.cin,
      birth: this.birth || '',
      prenom: this.prenom || '',
      nom: this.nom,
      email: this.email,
      telephone: this.telephone,
      ville: this.ville || '',
      quartier: this.quartier || '',
      password: this.password || '',
      cpassword: this.cpassword || ''

    };
var that = this;

var loader = this.loadingCtrl.create({
      content: "Please wait...",
      
    });
    loader.present();


  	this.UsersserviceProvider.signupUserService(account).then(authData => {
  		//successful
  		loader.dismiss();
  		that.navCtrl.setRoot(HomePage);

  	}, error => {
loader.dismiss();
     // Unable to log in
      let toast = this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'top'
      });
      toast.present();

      that.password = ""//empty the password field

  	});

  }

}

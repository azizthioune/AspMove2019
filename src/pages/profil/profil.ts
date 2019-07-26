import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertOptions, AlertController, ToastController } from 'ionic-angular';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { SignupPage } from "../signup/signup";
import * as firebase from "firebase";
import { LoginPage } from "../login/login";
import { MethodProvider } from "../../providers/method/method";

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
  public userProfile:firebase.database.Reference;
  public userId?: string;
  public prenom: any;
  public nom: any;
  public birth: any;
  public email: string;
  public password: any;
  public cpassword: any;
  public genre: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private usersserviceProvider:UsersserviceProvider,
    public toast: ToastController, public alertCtrl : AlertController,  public method: MethodProvider  ) {
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        
        this.userProfile = firebase.database().ref(`userProfile/${user.uid}`);
       
        this.getUserProfile().on('value', userProfileSnapshot => {
          // this.userProfile = userProfileSnapshot.val();
         this.prenom = userProfileSnapshot.val().prenom;
         this.nom = userProfileSnapshot.val().nom;
         this.birth = userProfileSnapshot.val().birth;
         this.email = userProfileSnapshot.val().email;
         this.genre = userProfileSnapshot.val().genre;
        
        })
      }
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

  getUserProfile(): firebase.database.Reference {
    return this.userProfile;
  }

  deleteCompte() {
    let options : AlertOptions ={
      title :"Attention !",
      subTitle: `Etes vous sûr de vouloir supprimer votre Compte?` ,
      buttons : [
        {
          text: "Annuler",
          role: "cancel"
        },
        {
          text: "Supprimer",
          handler : ()=>{
           
            this.navCtrl.setRoot(LoginPage).then(() => {
               
                this.toast.create({
                  message : "Votre Compte à été supprimer!",
                  duration : 5000
                }).present();
              })
              .catch((error)=>{
                console.log("error", error);
              })
          }
        }
      ]
    }
    this.alertCtrl.create(options).present();
    }

    showImage(picture : any, event) : void {
      //   event.stopPropagation();
      //   this.imageViewer.create(picture).present();
           this.method.showImage(picture, event);
       }
  

}

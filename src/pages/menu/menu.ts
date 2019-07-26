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
import { MestrajetsPage } from "../mestrajets/mestrajets";
import { ContactPage } from "../contact/contact";
import { MethodProvider } from "../../providers/method/method";



@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

   
 // public userProfilList = this.db.object<Account>('userProfile');

  rootPage : any;
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
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public usersserviceProvider:UsersserviceProvider,
    private afAuth: AngularFireAuth, private db: AngularFireDatabase, public toast: ToastController,
    public method: MethodProvider) {
    this.rootPage = HomePage;

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
        
getUserProfile(): firebase.database.Reference {
  return this.userProfile;
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

  mestrajets(){
    this.navCtrl.push(MestrajetsPage);
  }  

  contact(){
    this.navCtrl.push(ContactPage);
  }  

  showImage(picture : any, event) : void {
    //   event.stopPropagation();
    //   this.imageViewer.create(picture).present();
         this.method.showImage(picture, event);
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastOptions, ToastController, LoadingController, AlertController, AlertOptions } from 'ionic-angular';
import { Trajet } from '../../model/trajet/trajet.model';
import { AddtrajetProvider } from '../../providers/addtrajetservice/addtrajet.service';
import 'rxjs/Rx';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MenuPage } from "../menu/menu";
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-ajout-trajet',
  templateUrl: 'ajout-trajet.html',
})


export class AjoutTrajetPage {

  trajet: Trajet = {
    matricule: '' ,
    marque_voiture: '',
    type_voiture: '',
    prenom: '',
    nom: '',
    telephone: '',
    num_permis: '',
    villeD: '',
    quartierD: '',
    villeA: '',
    quartierA: '',
    dateD: new Date().toString() ,
    heureD: new Date().toString(),
    nbplace: '',
    prixtrajet: '' ,
    timestamp: firebase.database.ServerValue.TIMESTAMP,
  };
 

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private addtrajetProvider: AddtrajetProvider, public toast: ToastController,
     public loadingCtrl: LoadingController, public alertCtrl : AlertController) {

  }

  opened: boolean = false;

  

  

  toggleFunc() {
    this.opened = !this.opened 
  }


 
  logForm(form){
    console.log(form.value)
  }

  ionViewDidLoad() {
   
  }

  addTrajet(trajet: Trajet) {
    this.addtrajetProvider.addTrajet(trajet).then(ref => {
        let options : AlertOptions = {
          title :"Félicitation !",
          message: "Votre Trajet a été ajouté! Notre équipe vous contactera en cas de réservation...",
        };
        this.alertCtrl.create(options).present();
      })
      .catch(err => {
        console.log("Erreur", err);
      })
      this.navCtrl.setRoot(MenuPage);
}

}


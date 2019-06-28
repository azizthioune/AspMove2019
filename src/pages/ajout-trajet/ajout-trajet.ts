import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MonTrajet } from '../../model/addtrajet/MonTrajet.model';
import { AddtrajetserviceProvider } from '../../providers/addtrajetservice/addtrajetservice';
import 'rxjs/Rx';
import { FormGroup, FormControl } from "@angular/forms";
import { MenuPage } from "../menu/menu";
import 'rxjs/Rx';


@IonicPage()
@Component({
  selector: 'page-ajout-trajet',
  templateUrl: 'ajout-trajet.html',
})
export class AjoutTrajetPage {

  monTrajet: MonTrajet = {
    matricule: '',
    marque_voiture: '',
    type_voiture: '',
    model_voiture: '',
    num_permis: '',
    villeD: '',
    quartierD: '',
    villeA: '',
    quartierA: '',
    dateD: '',
    heureD: '',
    nbplace: ''
  };
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private addtrajetserviceProvider: AddtrajetserviceProvider) {
  
  }

  opened: boolean = false;

  toggleFunc() {
    this.opened = !this.opened 
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutTrajetPage');
  }

  addTrajet(monTrajet: MonTrajet) {
    this.addtrajetserviceProvider.addTrajet(monTrajet).then(ref => {
      this.navCtrl.setRoot('HomePage');
    })
}

}

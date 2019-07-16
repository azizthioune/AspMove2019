import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import 'rxjs/Rx';
import { AjoutTrajetPage } from "../ajout-trajet/ajout-trajet";
import { FormGroup, FormControl } from '@angular/forms';
import { Trajet } from '../../model/trajet/trajet.model';
import { AddtrajetProvider } from '../../providers/addtrajetservice/addtrajet.service';
import { Observable } from "rxjs/Observable";
import { DetailsTrajetPage } from "../details-trajet/details-trajet";
import { MenuPage } from "../menu/menu";




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 // trajetList: Observable<Trajet[]>
  public trajetList: Array<any>;

  descending: boolean = false;
  order: number;
  column: string = 'villeD';

  constructor(public navCtrl: NavController, private addtrajetProvider: AddtrajetProvider) {
  
} 
ionViewDidLoad() {
  this.addtrajetProvider.getTrajet().on('value', snapshot => {
    this.trajetList = [];
    snapshot.forEach( snap => {
      this.trajetList.push({
        trajetId: snap.key,
        matricule: snap.val().matricule,
        marque_voiture: snap.val().marque_voiture,
        type_voiture: snap.val().type_voiture,
        prenom: snap.val().prenom,
        nom: snap.val().nom,
        telephone: snap.val(). telephone,
        villeD: snap.val().villeD,
        quartierD: snap.val().quartierD,
        villeA: snap.val().villeA,
        quartierA: snap.val().quartierA,
        dateD: snap.val().dateD,
        heureD: snap.val().heureD,
        nbplace: snap.val().nbplace,
        prixtrajet: snap.val().prixtrajet
      });
      return false
    });
  });



  
}

  ajout(){
    this.navCtrl.push(AjoutTrajetPage);
  }

  acceuil(){
    this.navCtrl.setRoot(MenuPage);
  }  

  details(trajetId){
   this.navCtrl.push(DetailsTrajetPage, {'trajetId': trajetId});
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

 

}

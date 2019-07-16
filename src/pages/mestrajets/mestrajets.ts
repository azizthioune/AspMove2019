import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, AlertOptions } from 'ionic-angular';
import { Trajet } from '../../model/trajet/trajet.model';
import { AddtrajetProvider } from '../../providers/addtrajetservice/addtrajet.service';
import { Observable } from "rxjs/Observable";
import { DetailsTrajetPage } from "../details-trajet/details-trajet";
import { MenuPage } from "../menu/menu";
import { AjoutTrajetPage } from "../ajout-trajet/ajout-trajet";

/**
 * Generated class for the MestrajetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mestrajets',
  templateUrl: 'mestrajets.html',
})
export class MestrajetsPage {
  public trajetList: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private addtrajetProvider: AddtrajetProvider,
    public toast: ToastController, public alertCtrl : AlertController) {
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

  removeTrajet(trajetId) {
    let options : AlertOptions ={
      title :"Attention !",
      subTitle: `Etes vous supprimez de vouloir supprimer ?` ,
      buttons : [
        {
          text: "Annuler",
          role: "cancel"
        },
        {
          text: "Retirer",
          handler : ()=>{
           
            this.addtrajetProvider.removeTrajet(trajetId).then(() => {
               
                this.toast.create({
                  message : "Article retiré du panier!",
                  duration : 1000
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


  

  


}

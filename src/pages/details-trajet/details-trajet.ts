import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, AlertOptions } from 'ionic-angular';
import { Trajet } from '../../model/trajet/trajet.model';
import { AddtrajetProvider } from '../../providers/addtrajetservice/addtrajet.service';
import { Observable } from "rxjs/Observable";
import { MenuPage } from "../menu/menu";

/**
 * Generated class for the DetailsTrajetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-trajet',
  templateUrl: 'details-trajet.html',
})
export class DetailsTrajetPage {

  public currentTrajet: any = {};
  trajetList: Observable<Trajet[]>
  constructor(public navCtrl: NavController, public navParams: NavParams,  private addtrajetProvider: AddtrajetProvider,
    public alertCtrl : AlertController) {

  

  }

  ionViewDidLoad() {
    this.addtrajetProvider.getTrajetDetail(this.navParams.get('trajetId'))
    .on('value', addtrajetSnapshot => {
      this.currentTrajet = addtrajetSnapshot.val();
      this.currentTrajet.id = addtrajetSnapshot.key;
    });
  }

  reserver() {
   
        let options : AlertOptions = {
          title :"Félicitation !",
          message: "Votre Réservation est éffectué! Notre équipe vous contactera pour validation...",
        };
        this.alertCtrl.create(options).present();
        console.log("Réservation effectué!");
      
      this.navCtrl.setRoot(MenuPage);
}


  }



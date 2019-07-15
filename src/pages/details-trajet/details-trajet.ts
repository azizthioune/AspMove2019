import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Trajet } from '../../model/trajet/trajet.model';
import { AddtrajetProvider } from '../../providers/addtrajetservice/addtrajet.service';
import { Observable } from "rxjs/Observable";

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

  trajetList: Observable<Trajet[]>
  constructor(public navCtrl: NavController, public navParams: NavParams,  private addtrajetProvider: AddtrajetProvider) {

    this.trajetList = this.addtrajetProvider.getTrajet()
    .snapshotChanges()
    .map(
    changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsTrajetPage');
  }

}

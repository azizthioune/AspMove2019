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




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  trajetList: Observable<Trajet[]>

  descending: boolean = false;
  order: number;
  column: string = 'villeD';

  constructor(public navCtrl: NavController, private addtrajetProvider: AddtrajetProvider) {
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
 
}

  ajout(){
    this.navCtrl.push(AjoutTrajetPage);
  }

  details(){
    this.navCtrl.push(DetailsTrajetPage);
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

 

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import 'rxjs/Rx';
import { AjoutTrajetPage } from "../ajout-trajet/ajout-trajet";
import { FormGroup, FormControl } from '@angular/forms';
import { MonTrajet } from '../../model/addtrajet/MonTrajet.model';
import { AddtrajetserviceProvider } from '../../providers/addtrajetservice/addtrajetservice';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  trajetList: Observable<MonTrajet[]>

  constructor(public navCtrl: NavController) {

  }

  addTrajet(){
    this.navCtrl.push(AjoutTrajetPage);
  }

  

 

}

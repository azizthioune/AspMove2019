import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { AngularFireDatabase } from 'angularfire2/database';
import { Trajet } from "../../model/trajet/trajet.model";
import { AngularFireAuth } from 'angularfire2/Auth';





@Injectable()
export class AddtrajetProvider {

  private trajetListRef = this.db.list<Trajet>('trajet-list');
  userId: String;
  
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(currentUser => {
      if(currentUser) this.userId = currentUser.uid
    })
  }


  getTrajet() {
    return this.trajetListRef;
}

  addTrajet(trajet: Trajet) {
      trajet.userId = this.userId
      return this.trajetListRef.push(trajet);
  }


}

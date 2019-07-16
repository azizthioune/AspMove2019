import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { AngularFireDatabase } from 'angularfire2/database';
import { Trajet } from "../../model/trajet/trajet.model";
import { AngularFireAuth } from 'angularfire2/Auth';





@Injectable()
export class AddtrajetProvider {

  private trajetListRef = this.db.list<Trajet>('trajet-list');
  public userProfileRef:firebase.database.Reference;
  userId: String;
  public id: any;
  
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {

    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        this.id = user.uid
        console.log()
        this.userProfileRef = firebase.database().ref(`userProfile/${user.uid}`);
      }
    });

  }



  getTrajet() {
    return this.userProfileRef.child('/trajet-list');
}

getTrajets() {
  return this.trajetListRef;
}

getTrajetDetail(trajetId:string): firebase.database.Reference {
  return this.userProfileRef.child('trajet-list').child(trajetId);
}
/*
  addTrajet(trajet: Trajet) {
      trajet.userId = this.userId
      return this.trajetListRef.push(trajet);
  }
*/
  addTrajet(trajet: Trajet): Promise<any> {
    return this.userProfileRef.child('/trajet-list').push(trajet);

  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MonTrajet } from '../../model/addtrajet/MonTrajet.model';



@Injectable()
export class AddtrajetserviceProvider {

  private addTrajetRef = this.db.list<MonTrajet>('add-Trajet');

  constructor(private db: AngularFireDatabase) {
    
  }


  getAddTrajet() {
    return this.addTrajetRef;
}

addTrajet(montrajet: MonTrajet) {
    return this.addTrajetRef.push(montrajet);
}

updateNote(montrajet: MonTrajet) {
    return this.addTrajetRef.update(montrajet.key, montrajet);
}

removeNote(montrajet: MonTrajet) {
    return this.addTrajetRef.remove(montrajet.key);
}

}

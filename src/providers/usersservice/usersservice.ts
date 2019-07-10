import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { AngularFireDatabase } from 'angularfire2/database';

import 'firebase/storage';
import { CameraOptions, Camera } from '@ionic-native/camera';

@Injectable()
export class UsersserviceProvider {

  public data: any;
  public fireAuth: any;
  public userProfile: any;

  private userProfilListRef = this.db.list<Account>('userProfile');

  constructor(public http: Http, private db: AngularFireDatabase) {
    this.fireAuth = firebase.auth().onAuthStateChanged;
    this.userProfile = firebase.database().ref('users');
  }
 
    
  loginUserService(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signupUserService(account: {}):Promise<any>{
      return firebase.auth().createUserWithEmailAndPassword(account['email'], account['password']).then(newUser => {
        firebase.database().ref(`userProfile/${firebase.auth().currentUser.uid}`).set(account);
            });
        }

      
/*
        updateProfil(account: {}) {
          return this.userProfilListRef.update(account['users'], account);
      }
*/
        getAccount() {
        
         return  this.userProfilListRef;
      }      

     

      
}



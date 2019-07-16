import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/Auth';

import 'firebase/storage';
import { CameraOptions, Camera } from '@ionic-native/camera';

@Injectable()
export class UsersserviceProvider {

  public data: any;;
  public userProfile: any;

  public fireAuth:firebase.auth.Auth;
  public userProfileRef:firebase.database.Reference;
  private currentUser: firebase.User;
  public user: any;
 
  userId: String;
  constructor(public http: Http, private db: AngularFireDatabase) {
    this.fireAuth = firebase.auth();
  //  this.userProfileRef = firebase.database().ref('/userProfile');
    this.userProfile = firebase.database().ref('userProfile/');
    firebase.auth().onAuthStateChanged((user: firebase.User) => this.currentUser = user);
  }

 
    
  loginUserService(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signupUserService(account: {}):Promise<any>{
      return firebase.auth().createUserWithEmailAndPassword(account['email'], account['password']).then(newUser => {
        firebase.database().ref(`userProfile/${firebase.auth().currentUser.uid}`).set(account);
            });
        }


     

        displayName(): string {
          if (this.currentUser !== null) {
            return this.currentUser.displayName;
          } else {
            return '';
          }
        }
  

      
/*
        updateProfil(account: {}) {
          return this.userProfilListRef.update(account['users'], account);
      }
*/
      
     

      
}



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';
import 'firebase/storage';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { AngularFireAuth } from "angularfire2/Auth";

declare var window: any;
/*
  Generated class for the FirebaseserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseserviceProvider {
 
  public userProfileRef:firebase.database.Reference;
  public id: any;

  constructor( private camera: Camera,private db: AngularFireDatabase, private afAuth: AngularFireAuth) {

    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        this.id = user.uid
        console.log()
        this.userProfileRef = firebase.database().ref(`userProfile/${user.uid}`);
      }
    });

      
    }


//un autre code differents des autres pour upload image


 /*

createPost(pictureName: string, picture: string): Promise<any> {
  firebase.storage().ref('/pictures/').child(pictureName)
  .child('plantPicture.png')
  .putString(picture, 'base64', {contentType: 'image/png'})
  .then((savedPicture) => {
    firebase.database().ref(`userProfile/${firebase.auth().currentUser.uid}`).push({
   picture: savedPicture.downloadURL,
    name: pictureName,
   })
  });
  return 
}

 */

    uploadFromCamera() {
      const options: CameraOptions = {
        quality: 70,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
  
      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        const myphoto = firebase.storage().ref('profilePicture.png');
        myphoto
          .putString(imageData, 'base64', {contentType: 'image/png'})
          .then(savedProfilePicture => {
            firebase
              .database()
              .ref(`userProfile`)
              .set(savedProfilePicture.downloadURL);
              alert('Photo de profil Validé! ');
          });
      }, error => {
        // Log an error to the console if something goes wrong.
        console.log("ERROR -> " + JSON.stringify(error));
      });
    }
 
    
  
    //open the gallery and Return a promise with the image data
    uploadFromGallery() {
      const options: CameraOptions = {
        quality: 70,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        saveToPhotoAlbum:false
      }
  
      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        const myphoto = firebase.storage().ref('profilePicture.png');
        myphoto
          .putString(imageData, 'base64', {contentType: 'image/png'})
          .then(savedProfilePicture => {
            firebase
              .database()
              .ref(`userProfile`)
              .set(savedProfilePicture.downloadURL);
              alert('Photo de profil Validé! ');
          });
      }, error => {
        // Log an error to the console if something goes wrong.
        console.log("ERROR -> " + JSON.stringify(error));
      });
    }
 


}

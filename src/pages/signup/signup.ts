import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ActionSheetController } from 'ionic-angular';
import * as firebase from 'firebase';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import { HomePage } from "../home/home";
import 'rxjs/Rx';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FirebaseserviceProvider } from '../../providers/firebaseservice/firebaseservice';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [UsersserviceProvider]
})
export class SignupPage {
 
  public key?: string;
  public prenom: any;
  public nom: any;
  public birth: any;
  public email: string;
  public password: any;
  public cpassword: any;
  public genre: any;

  public notePicture: any;

 
  private pictures: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public UsersserviceProvider: UsersserviceProvider, public loadingCtrl: LoadingController,
      public toastCtrl: ToastController, private file: File, private camera: Camera,public firebaseService: FirebaseserviceProvider,
      private actionSheetCtrl: ActionSheetController,public cameraPlugin: Camera ) {
  }

 

  getImage() {
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
            .ref(`profilePicture`)
            .set(savedProfilePicture.downloadURL);
            alert('Photo de profil Validé! ');
        });
    }, error => {
      // Log an error to the console if something goes wrong.
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }


  changePicture(): void {
    let actionSheet = this.actionSheetCtrl.create({
      enableBackdropDismiss: true,
      buttons: [
        {
          text: 'Take a picture',
          icon: 'camera',
          handler: () => {
            this.firebaseService.uploadFromCamera();
          }
        }, {
          text: 'From gallery',
          icon: 'images',
          handler: () => {
            this.firebaseService.uploadFromGallery();
          }
        }
      ]
    });
    actionSheet.present();
  }

   

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  doSignup(){
    var account = {
      prenom: this.prenom,
      nom: this.nom || '',
      birth: this.birth || new Date().toString(),
      email: this.email || '',
      password: this.password || '',
      cpassword: this.cpassword || '',
      genre: this.genre || ''

    };
var that = this;

var loader = this.loadingCtrl.create({
      content: "Please wait...",
      
    });
    loader.present();


  	this.UsersserviceProvider.signupUserService(account).then(authData => {
  		//successful
  		loader.dismiss();
  		that.navCtrl.setRoot(HomePage);

  	}, error => {
loader.dismiss();
     // Unable to log in
      let toast = this.toastCtrl.create({
        message: error,
        duration: 3000,
        position: 'top'
      });
      toast.present();

      that.password = ""//empty the password field

  	});

  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageViewerController } from 'ionic-img-viewer';

/*
  Generated class for the MethodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MethodProvider {

  constructor( public imageViewer: ImageViewerController) {
    console.log('Hello MethodProvider Provider');
  }

  showImage(picture : any, event) : void {
      event.stopPropagation();
      this.imageViewer.create(picture).present();
      console.log('called from provider');
      
    }

}

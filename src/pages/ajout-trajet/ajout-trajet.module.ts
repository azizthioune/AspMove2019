import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutTrajetPage } from './ajout-trajet';

@NgModule({
  declarations: [
    AjoutTrajetPage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutTrajetPage),
  ],
})
export class AjoutTrajetPageModule {}

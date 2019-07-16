import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MestrajetsPage } from './mestrajets';

@NgModule({
  declarations: [
    MestrajetsPage,
  ],
  imports: [
    IonicPageModule.forChild(MestrajetsPage),
  ],
})
export class MestrajetsPageModule {}

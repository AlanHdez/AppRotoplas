import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MsmPage } from './msm';

@NgModule({
  declarations: [
    MsmPage,
  ],
  imports: [
    IonicPageModule.forChild(MsmPage),
  ],
})
export class MsmPageModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-panel',
  templateUrl: 'panel.html',
})
export class PanelPage {
  tiempo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //se determina el valor por default de la variable tiempo
    this.tiempo = 'dia';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PanelPage');
  }

}

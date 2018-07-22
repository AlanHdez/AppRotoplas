import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RotoplasServicios } from '../../servicios/rotoplas.servicios';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  usuario = {id:null,tipo:null,email:null,nombre:null,idDisp:null, user:null,password:null};
  user= null;
  email = null;
  idDisp = null;
  nombre = null;
  tipo = null;
  password = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public rotoplasServicios: RotoplasServicios) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  paginaLogin(){
    this.navCtrl.push(LoginPage);
  }
  registro(){
    /*this.usuario.tipo = this.tipo;
    this.usuario.email = this.email;
    this.usuario.nombre = this.nombre;
    this.usuario.user = this.user;
    this.usuario.password = this.password;
    this.usuario.idDisp = this.idDisp;*/
    this.usuario.id = Date.now();
    console.log(this.usuario);
    this.rotoplasServicios.createUsario(this.usuario);
    alert('Registro con éxito');
    this.navCtrl.push(LoginPage);
  }
}

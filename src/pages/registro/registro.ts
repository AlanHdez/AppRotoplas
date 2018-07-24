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
    //El id usuario utiliza es asignado por la la fecha del sistema
    this.usuario.id = Date.now();
    console.log(this.usuario);
    /*Se va al método editarUsuario el cual modifica la información
  obtenido de los inputs en el html*/
    this.rotoplasServicios.createUsario(this.usuario);
    alert('Registro con éxito');
    this.navCtrl.push(LoginPage);
  }
}

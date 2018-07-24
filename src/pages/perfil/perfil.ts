import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RotoplasServicios } from '../../servicios/rotoplas.servicios';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  usuario:any= {id:null,email:null,nombre:null,password:null,tipo:null,user:null};
  constructor(public navCtrl: NavController, public navParams: NavParams,public rotoplasServicios: RotoplasServicios) {
    /*Se obtienen los parametros enviados y se asignan a los datos de la variable usuario
    los cuales corresponden a los inputs incluidos en el html*/
    this.usuario.id=this.navParams.get('id');
    this.usuario.tipo=this.navParams.get('tipo');
    this.usuario.email=this.navParams.get('email');
    this.usuario.nombre=this.navParams.get('nombre');
    this.usuario.idDisp=this.navParams.get('idDisp'); 
    this.usuario.user=this.navParams.get('user');
    this.usuario.password=this.navParams.get('password');
    console.log('Id: '+this.usuario.id);
    console.log('User: '+this.usuario.user);
    console.log(this.usuario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
  //Se navega a la pagina del Login
  paginaLogin(){
    this.navCtrl.push(LoginPage);
  }
  /*Se va al método editarUsuario el cual modifica la información
  obtenido de los inputs en el html*/
  editarUsuario(){
    this.rotoplasServicios.editUsuario(this.usuario);
      alert('Nota editada con éxito');
  }
}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { TabsPage } from '../tabs/tabs';
import { RotoplasServicios } from '../../servicios/rotoplas.servicios';
//import { Observable } from '../../../node_modules/rxjs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuarios=[];
  usuario= {id:null,tipo:null,email:null,nombre:null,idDisp:null, user:null,password:null};
  user="";
  password = null;
  id=null;
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public navParams: NavParams, public rotoplasServicios: RotoplasServicios) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.rotoplasServicios.getUsuarios().subscribe( datos =>{
      this.usuarios = datos;
    });
    console.log('Usuarios');
    console.log(this.usuarios);
  }
  paginaRegistro(){
    this.navCtrl.push(RegistroPage);
  }
  inicioSesion(){
    console.log('usuario:'+this.user);
    console.log('password: '+this.password);
    this.usuarios.filter(item =>{
      if(item.user == this.user &&
        item.password == this.password){
          this.usuario.id = item.id;
          this.id = item.id;
          this.usuario.email = item.email;
          this.usuario.tipo = item.tipo;
          this.usuario.nombre = item.nombre;
          this.usuario.idDisp = item.idDisp;
          this.usuario.user = item.user;
          this.usuario.password = item.password;
          return item;
        }
    });
    console.log('usuario');
    console.log(this.usuario);
    console.log('id');
    console.log(this.usuario.id);
    if(this.usuario.id != null){
      this.navCtrl.push(TabsPage, {
        id:this.usuario.id,
        tipo:this.usuario.tipo,
        email:this.usuario.email,
        nombre:this.usuario.nombre,
        idDisp:this.usuario.idDisp, 
        user:this.usuario.user,
        password:this.usuario.password});
      alert('Inicio de sesion con éxito');
    }
    else{
      alert('Usuario o password incorrecto');
    }
  }
}

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
    /*cuando la pagina carga se obtienen los usuarios que hay en la BD
    mediante el método getUsuarios el cual devuelve una lista y esa a su vez 
    se pasa a un arreglo para su manipulacion*/
    this.rotoplasServicios.getUsuarios().subscribe( datos =>{
      this.usuarios = datos;
    });
    //Se imprime en consola el arreglo ya con los usuarios recibidos
    console.log('Usuarios');
    console.log(this.usuarios);
  }
  //Método con el que se va hacia la pagina de Registro
  paginaRegistro(){
    this.navCtrl.push(RegistroPage);
  }
  inicioSesion(){
    //Se imprime en consola los valores que contienen los input 
    console.log('usuario:'+this.user);
    console.log('password: '+this.password);
    /*Los arreglos tienen el método filter el cual permite realizar un filtro
    en el arreglo de acuerdo a distintas condiciones, en este caso nos regresa
    el usuario cuyo usuario y contraseña sean igual a los valores del input
    así llenamos la variable usuario con los campos de ese usuario correspondiente
    */
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
    /*Si obtenemos un usuario el id será distinto a null y se enviarán como
    parametros a la tabspage toda la información del usuario y se mostrará
    una alerta de que se inició sesión con éxito*/
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

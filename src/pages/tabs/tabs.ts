import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { PerfilPage } from '../perfil/perfil';
import { PanelPage } from '../panel/panel';
import { MsmPage } from '../msm/msm';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //Se asignan las paginas a las que se irán en cada pestaña
  tab1Root = PerfilPage;
  tab2Root = PanelPage;
  tab3Root = MsmPage;
  infousuario:any;
    constructor(public navParams: NavParams) {
      /*se obtienen los parametros y se asignan a la variable infousuario 
      que forma parte de rootparams*/
      this.infousuario = {
        id:this.navParams.get('id'),
        tipo:this.navParams.get('tipo'),
        email:this.navParams.get('email'),
        nombre:this.navParams.get('nombre'),
        idDisp:this.navParams.get('idDisp'), 
        user:this.navParams.get('user'),
        password:this.navParams.get('password')
      } 
    }

}

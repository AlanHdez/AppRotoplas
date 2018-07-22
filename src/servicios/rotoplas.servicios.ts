import{Injectable} from '@angular/core';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';

@Injectable()
export class RotoplasServicios{
    usuarios = [];
    constructor( public afDB: AngularFireDatabase){}
    //usuarios = [
       // {id:1,tipo:'administrador',email:'aaaa@gmail.com',nombre:'Alan', user:'Alan',password:'12345'},
       // {id:2,tipo:'ventas y mercadotecnía',email:'bbbb@gmail.com',nombre:'Pedro', user:'Pedro_Perez',password:'abcd'},
       // {id:3,tipo:'instalaciones y mantenimiento',email:'cccc@gmail.com',nombre:'Juan', user:'JJimenez',password:'123abc'},
       // {id:4,tipo:'innovacón',nombre:'Francisco', email:'dddd@gmail.com',user:'Pancho_H',password:'abc123'},
    //];
    public getUsuarios(){
        return this.afDB.list('usuarios/').valueChanges();
        //return this.usuarios;
    }
    public getUsuario(id){    
     return this.afDB.object('usuarios/'+id).valueChanges()
    //this.usuariosdatos.filter(function(e,i){return (e.nombre == user && e.password == password)})[0] || {id:null,tipo:null,email:null,nombre:null, user:null,password:null};
    }

    public createUsario(usuario){
        this.afDB.database.ref('usuarios/'+usuario.id).set(usuario);
        //this.usuarios.push(usuario);
    }
    public editUsuario(usuario){
        this.afDB.database.ref('usuarios/'+usuario.id).set(usuario);
    }
    /*public deleteUsuario(usuario){
        for(let i=0; i <this.usuarios.length;i++){
            if(this.usuarios[i].user == usuario.user && this.usuarios[i].password == usuario.password){
                this.usuarios.splice(i,1);
            }
        }
    }*/
}
import{Injectable} from '@angular/core';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';

@Injectable()
export class RotoplasServicios{
    /*Aquí van todos los metodos que obtienen acceso a la base de datos
    para la manipulación de los mismos*/
    usuarios = [];
    constructor( public afDB: AngularFireDatabase){}
    
    public getUsuarios(){
        return this.afDB.list('usuarios/').valueChanges();
        
    }
    public getUsuario(id){    
     return this.afDB.object('usuarios/'+id).valueChanges()
    }

    public createUsario(usuario){
        this.afDB.database.ref('usuarios/'+usuario.id).set(usuario);
       }
    public editUsuario(usuario){
        this.afDB.database.ref('usuarios/'+usuario.id).set(usuario);
    }
}
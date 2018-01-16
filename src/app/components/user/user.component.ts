import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";
import { NgForm } from "@angular/forms";
import { User } from "../../interface/user";
import { KeysPipe } from '../../pipes/keys.pipe';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})

export class UserComponent implements OnInit {

private user:User = {
  nombre:"",
  apellido:"",
  edad:0,
  fecha_nac:"",
  domicilio:"",
  ciudad:"",
  tel:"",
  pais:"",
  img:""
}

nuevo:boolean = false;
id:string;
estado:boolean;
accion:string;

  constructor( private _userService:UserService,
              private router:Router,
              private route:ActivatedRoute ) {

                this.route.params
                .subscribe( parametros=>{

                  this.id = parametros['id']

                  if( this.id !== "nuevo" ){

                  this._userService.getUser( this.id )
                        .subscribe( user => this.user = user )
                    this.accion = "Se esta por editar un registro de usuario.";
                  }else{
                    this.accion = "Se espera el ingreso de un nuevo registro de usuario.";
                  }
                });

              }

  ngOnInit() {    
  }

  confir_datos(){
    this.estado = true;
    setTimeout(()=>{this.estado=false;},2500);

  }

  guardar(){
    
    if( this.id == "nuevo" ){
      // insertando
      this._userService.nuevoUser( this.user )
            .subscribe( data=>{
                  this.router.navigate(['/user/',data.name])
                  this.confir_datos();
            },
            error=> console.error(error));
    }else{
      //actualizando
      this._userService.actualizarUser( this.user, this.id )
            .subscribe( data=>{
            console.log(data);
            this.confir_datos();
            },
            error=> console.error(error));
    }

  }

  limpiar_datos( forma:NgForm ){

    this.router.navigate(['/user/','nuevo']);
    forma.reset({
      pais:"Argentina"
    });

  }



}

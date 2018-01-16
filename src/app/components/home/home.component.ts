import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";
import { User } from "../../interface/user";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  users:any[]=[];
  loading:boolean = true;
  reg:number;

  constructor( private _userService:UserService ) {

    this._userService.getUsers()
    .subscribe( data =>{
      this.users = data;
      console.log(data);
      this.loading = false;
      this.reg = this.transform(data);
      console.log(this.users);
    })

  }

  ngOnInit() {
  }

  transform( value: any ): any {
    
        let keys = [];
        for( let key in value ){
          keys.push(key)
        }
        return keys.length;
    
  }

  delete( key$:string ){

    console.log(key$);

    let r = confirm("Realmente desea eliminar este registro..?");

    if ( r==true ){

    this._userService.deleteUser(key$)
            .subscribe( respuesta=>{
              if( respuesta ){
                console.error(respuesta);
              }else{
                //todo bien
                this._userService.getUsers()
                    .subscribe( data =>{
                      this.users = data;
                      this.loading = false;
                      this.reg = this.transform(data);
                    }) 
              }
            })
          }//if
      }

}

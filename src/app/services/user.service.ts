import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { User } from "../interface/user";
import 'rxjs/Rx';

@Injectable()
export class UserService {

  usersURL:string = "https://mibase-7ceed.firebaseio.com/users.json";
  userURL:string = "https://mibase-7ceed.firebaseio.com/users/";
  constructor( private http:Http ) { }

  nuevoUser( user:User ){
    
        let body = JSON.stringify( user );
        let headers = new Headers({
          'Content-Type':'application/json'
        });
    
        return this.http.post(  this.usersURL, body, { headers }  )
              .map( res=>{
                console.log(res.json());
                return res.json();
              })
      }
  
  actualizarUser( user:User, key$:string ){
        
            let body = JSON.stringify( user );
            let headers = new Headers({
              'Content-Type':'application/json'
            });
        
            let url = `${ this.userURL }/${ key$ }.json`;
        
            return this.http.put(  url , body, { headers }  )
                  .map( res=>{
                    console.log(res.json());
                    return res.json();
                  })
    }

  getUsers( ){
    
        return this.http.get( this.usersURL )
          .map( res=>res.json() );
    
      }
  
  getUser( key$:string ){

    let url = `${ this.userURL }/${ key$ }.json`;
    return this.http.get( url )
      .map( res=>res.json() );

  }

  deleteUser(key$:string){
    let url = `${  this.userURL  }/${ key$ }.json`;
    return this.http.delete( url )
        .map( res => res.json()
      )
  }    

}

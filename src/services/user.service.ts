import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {User} from '../model/model.user';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
@Injectable({
  providedIn: 'root'
})
export class UserService{
  headersT ;

headers=new HttpHeaders({'Authorization': 'Bearer '+this.authService.jwt});

  constructor( public http:HttpClient, private authService:AuthentificationService){
    this.authService.loadToken();
    this.authService.parseJWT();
    let headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.jwt});
    this.headersT=headers;
}

  getUtilisateur(username:String){
    return this.http.get("http://localhost:8080/users/"+username,{headers:this.headersT}).pipe();

  }
  getpath(user){
    return this.http.get(user.path,{headers:this.headersT}).pipe();

  }
  saveUtilisateur(utilisateur:User){

    return this.http.post("http://localhost:8080/register", utilisateur,{headers:this.headersT});

  }


      listUsers(url){
        this.authService.loadToken();
        this.authService.parseJWT();
        console.log(this.authService.roles);

        console.log(this.headersT);
                  return this.http.get(url,{headers:this.headersT});

}


  deleteUtilisateur(username:String){
    return this.http.delete('http://localhost:8080/users/'+username,{headers:this.headersT});

  }


}

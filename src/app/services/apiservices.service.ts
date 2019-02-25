import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from "../interface/login.interface";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {
  
  urlGetInbox:string = "https://prueba-seleccion-granada.herokuapp.com/inbox";
  urlGetDeleted:string = "https://prueba-seleccion-granada.herokuapp.com/inbox";
  urlGetSent:string = "https://prueba-seleccion-granada.herokuapp.com/sent";
  urlGetFav:string = "https://prueba-seleccion-granada.herokuapp.com/inbox";
  urlPutFav:string = "https://prueba-seleccion-granada.herokuapp.com/inbox/favorite/4";
  urlPostLogin:string = "https://prueba-seleccion-granada.herokuapp.com/login";
  urlDelDeleted:string = "https://prueba-seleccion-granada.herokuapp.com/inbox/delete";

  BODY = {
    'favorite':true
  }
  DELETED = {
    'state':false
  }

  getInbox(){
    return this.http.get(this.urlGetInbox);
  }
  getDeleted(){
    return this.http.get(this.urlGetDeleted);
  }
  getSent(){
    return this.http.get(this.urlGetSent);
  }
  putFav(){
    return this.http.put(this.urlPutFav, this.BODY);
  }
  getFav(){
    return this.http.get(this.urlGetFav);
  }

  // nuevoLogin(login:Login){
  //   let body = JSON.stringify(login);
  //   let headers = new HttpHeaders({
  //     'Content-Type':'application/json'
  //   });
  //   return this.http.post(this.urlPostLogin, body, {headers:headers});
  // }

  // autenticacion(login:Login){
  //   return this.http.post(this.urlPostLogin + 'login', login);
  // }
  
  constructor(private http: HttpClient) { }
}

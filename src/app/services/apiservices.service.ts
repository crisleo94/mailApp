import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {
  
  urlGetInbox:string = "https://prueba-seleccion-granada.herokuapp.com/inbox";
  urlGetSent:string = "https://prueba-seleccion-granada.herokuapp.com/sent";
  urlPutFav:string = "https://prueba-seleccion-granada.herokuapp.com/inbox/favorite/4";
  urlGetFav:string = "https://prueba-seleccion-granada.herokuapp.com/inbox";
  BODY = {
    'favorite':true
  }

  getInbox(){
    return this.http.get(this.urlGetInbox);
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
  
  constructor(private http: HttpClient) { }
}

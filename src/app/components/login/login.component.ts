import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { appRutas } from "../../app.routes";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  frLogin: FormGroup;
  usuario:string;
  contraseña:number;
 

  constructor(private rutas: Router ) {
    this.frLogin = new FormGroup({
      'user': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    })
   }


 

   logear(user:string, pass:number){
      this.usuario = user;
      this.contraseña = pass;
      if (this.usuario == "granada" && this.contraseña == 1234) {
        this.rutas.navigate(['/Home']);
        this.guardarStorage();
      }
   }

   logFailed(){
    if (this.usuario != "granada" && this.contraseña != 1234) {
      this.rutas.navigate(['/Error']);
    }
   }

   guardarStorage(){
    localStorage.setItem('user', this.usuario)
    localStorage.setItem('password', JSON.stringify(this.contraseña))
   }

   cargarStorager(){

   }

  ngOnInit() {
  }

}

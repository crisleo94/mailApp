import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
      'asunto': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'destinatario': new FormControl('', [Validators.required, Validators.email]),
      'contenido': new FormControl('', Validators.required)
    })
   }

   enviar(){
     console.log(this.forma.value);
     console.log(this.forma);
   }

  ngOnInit() {
  }
  

}

import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Mail } from '../../interface/mail.interface';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  inbox:any[] = [];

  favorite:any[] = [];


  constructor(private api: ApiservicesService) {

    this.api.getInbox()
    .subscribe((resp:any)=>{
      this.inbox = resp.data;
    });

    this.api.getFav()
    .subscribe((resp:any)=>{
      this.favorite = resp.data;
    });
   }

   getBusqueda(termino:string){
     
   }

   

  ngOnInit() {
  }
}

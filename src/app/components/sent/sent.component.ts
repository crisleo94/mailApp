import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {

  sent:any[] = [];


  constructor(private api: ApiservicesService) {
    this.api.getSent()
    .subscribe((resp:any)=>{
      this.sent = resp.data;
    });
   }

  ngOnInit() {
  }

}

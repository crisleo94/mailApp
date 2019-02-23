import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';

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

  ngOnInit() {
  }

}

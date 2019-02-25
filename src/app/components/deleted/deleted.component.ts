import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {

  inbox:any[] = [];


  constructor(private api: ApiservicesService) { 
    this.api.getInbox()
    .subscribe((resp:any)=>{
      this.inbox = resp.data;
    });
  }

  ngOnInit() {
  }

}

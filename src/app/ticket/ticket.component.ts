import { Component, OnInit } from '@angular/core';
import {TicketService} from './ticket.service';
import {Bus} from '../login-bus/bus';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  source:string;
  destination:string;
  mobile:string;
  bus:Bus;

  constructor(private ticketservice:TicketService) { }

  ngOnInit() {

    
  }



  generateticket(){
  this.bus=JSON.parse(localStorage.getItem("BusLogin"));
  console.log(this.bus.bus_id);
  this.ticketservice.genrateticket(this.bus.bus_id,this.source,this.destination,this.mobile)
  .subscribe((res)=>{
        console.log(res.json());
        this.source=null;
        this.destination=null;
        this.mobile=null;
  },(err)=>{
    console.log(err);
    alert("fail to send");
  });

}

}


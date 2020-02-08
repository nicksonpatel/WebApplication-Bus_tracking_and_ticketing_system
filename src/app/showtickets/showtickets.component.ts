import { Component, OnInit } from '@angular/core';
import {Bus} from './bus';
import {Showtickets} from './showtickets.service'
import { Ticket } from '../ticket/ticket';

@Component({
  selector: 'app-showtickets',
  templateUrl: './showtickets.component.html',
  styleUrls: ['./showtickets.component.css']
})
export class ShowticketsComponent implements OnInit {
  busid:Int32Array;
 
  bus=new Bus();
  //Ticket=new Ticket();
  Ticket:Ticket[];
  constructor(private showtickets:Showtickets) { 
    this.bus=JSON.parse(localStorage.getItem("BusLogin"));
   this.busid=this.bus.bus_id;

    console.log(this.busid);
  }

  ngOnInit() {
  this.showtickets.ticketsShow(this.busid).subscribe(res=>{
    // console.log(res.json());
     this.Ticket=res.json();
     console.log(this.Ticket);
     // console.log(this.tickets.busid);
    },err=>{

    });
  }

}

import { Component, OnInit } from '@angular/core';
import {User} from '../registration/User1';
import { Ticket } from '../ticket/ticket';
import {Bookings} from './bookings.service'

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  userid:Int32Array;
  u1=new User();
  Ticket:Ticket[];
  constructor(private bookings:Bookings) {

    this.u1=JSON.parse(localStorage.getItem("Userdetails"));
    console.log("hiii"+this.u1.id)
    this.userid=this.u1.id;
   }

  ngOnInit() {
    this.bookings.bookings(this.userid).subscribe(res=>{
      
       this.Ticket=res.json();
       console.log(this.Ticket);
      },err=>{
  
      });

  }


}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bus-nav',
  templateUrl: './bus-nav.component.html',
  styleUrls: ['./bus-nav.component.css']
})
export class BusNavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Logout(){
    localStorage.removeItem("Buslogin");
    localStorage.removeItem("buslog");
    this.router.navigateByUrl("/buslogin");
  }

}

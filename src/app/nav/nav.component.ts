import { Component, OnInit } from '@angular/core';
import {} from '../home/home.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  active:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Logout(){
    //localStorage.setItem("UserDetails",null);
    localStorage.clear();
    this.router.navigateByUrl('/');
  }


}

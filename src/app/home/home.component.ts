import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Userlogin:boolean;
  constructor(private router:Router) {
    if(localStorage.getItem('loginUser1') == "true") {
       this.Userlogin = true;
     } else {
       console.log("null not ok");
       this.Userlogin = false;
     }
   }

  ngOnInit() {
    if(this.Userlogin!=true){
      this.router.navigateByUrl('/');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Login } from './login';
import { LoginService } from  './login.service'; 
import {Observable}  from 'rxjs/Observable';
import { Body } from '@angular/http/src/body';
import {User} from '../registration/User1';
import {QRcodeComponent} from '../qrcode/qrcode.component';
import { ninvoke } from 'q';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login();

  Userlogin:boolean;
  getlogin:JSON;
  u1=new User();
  object :Object;

  ni:QRcodeComponent;


  constructor(private router:Router,private loginservice:LoginService) {
    if(localStorage.getItem('loginUser1') == "true") {
      this.Userlogin = true;
    } else {
      console.log("null not ok");
      this.Userlogin = false;
    }
    console.log("ctor :"+ localStorage.getItem("loginUser1"));
   }
  


  ngOnInit() {
    if(this.Userlogin==true){
      this.router.navigateByUrl('/home');
    }
    else{
      this.router.navigateByUrl('/');
    }
  }

  btnClick= function () {
    this.router.navigateByUrl('/Registration');
    }


    userlogin():void {
      this.getlogin=null;
     this.loginservice.Userlogin(this.login).subscribe(respond=>{

      localStorage.setItem("Userdetails",JSON.stringify(respond.json()));
      this.Userlogin=true;
      localStorage.setItem("loginUser1","true");
       this.router.navigateByUrl('/home');
       console.log("local storage"+JSON.parse(localStorage.getItem("Userdetails")));
       
      },  
               eror=>{console.log(eror);
               this.getlogin=null;this.router.navigateByUrl('/');});
        
      }

}

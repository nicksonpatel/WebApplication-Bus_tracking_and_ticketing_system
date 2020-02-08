import { Component, OnInit } from '@angular/core';
import {BusService} from './login-bus.service';
import {Router} from '@angular/router';
import { Bus } from './bus';

@Component({
  selector: 'app-login-bus',
  templateUrl: './login-bus.component.html',
  styleUrls: ['./login-bus.component.css']
})
export class LoginBusComponent implements OnInit {
  busid:Int32Array;
  OTP:string;
  btntext:string;
  btnchabge:string;
  bus:JSON;
  buslogin:boolean;

  bus1=new Bus();
  bus2=new Bus();

  constructor(private busService:BusService,private router:Router) {
    this.busid=null;
    this.OTP=null;
    this.btntext="Send OTP";
    this.btnchabge="true";
    if(localStorage.getItem('buslog') == "true") {
      this.buslogin = true;
    } else {
      console.log("null not ok");
      this.buslogin = false;
    }
   }

  ngOnInit() {
    if(this.buslogin==true){
      this.router.navigateByUrl('/bushome');
    }
    else{
      this.router.navigateByUrl('/buslogin');
    }
  }

  OTPLogin(){
    console.log(this.busid);
    if(this.btnchabge!=null){
        this.sendotp();
        this.btntext="Verify OTP";
        this.btnchabge=null;
      }
      else{
        this.Verifyotp();
      }
    }

    sendotp(){
      this.busService.sendOTP(this.busid).subscribe(res=>{
            console.log(JSON.stringify(res));
      },
      err=>{
        console.log("fail to send");

      });
    }

    Verifyotp(){
          this.busService.verifyOTP(this.OTP,this.busid).subscribe(res=>{
            //this.bus=res.json();
            let body=res.text();
            if(body=="")
            {
              
              console.log("wrong");
              this.router.navigateByUrl('/buslogin');
              //console.log("error"+res.json());
              }
              else{
                console.log("right");
                console.log(res.json());
                this.router.navigateByUrl('/bushome');
                this.bus1=res.json();
                localStorage.setItem("BusLogin",JSON.stringify(this.bus1));
                localStorage.setItem("buslog","true");
                //this.bus1=res.json();
                //this.bus2=JSON.parse(localStorage.getItem("BusLogin"));
                //console.log(this.bus2.bus_numberPalte);
              }
          },err=>{
            console.log("wrong");
              console.log("error"+err);
          });

    }

}

import { Component, OnInit } from '@angular/core';
import { Subscription } from './subscription';
import { Bus } from '../login-bus/bus';
import {SubscriptionService} from './subscription.service';
import {User} from '../registration/User1';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  QRhide:boolean;
  subhidden:boolean;
  pack:Int32Array;
  QRcode:string;
  sub:Subscription;
  user:User;
  obj:Object;
  
  constructor(private subscriptionService:SubscriptionService) {
    this.user=JSON.parse(localStorage.getItem("Userdetails"));
   }

  ngOnInit() {
   // console.log(this.pack);
   // console.log("user in oninit"+this.user.userName);
    this.getsubscription();

  }

  getsubscription(){
    this.subscriptionService.getsubscription(this.user.id).subscribe((res)=>{
         this.sub=res.json();
         console.log(res.json());
         if(this.sub.subsribation==null){
           this.user.subscription=this.sub;
          // localStorage.setItem("UserDetails",JSON.stringify(JSON.parse(this.user)));  //can be implemented later
          this.subhidden=false;
          this.QRhide=true;
         }else{
        // console.log(this.sub.user.mobile);
         //console.log(this.sub.subsribation);
         this.QRcode=this.sub.subsribation;
         this.subhidden=true;
         this.QRhide=false;
         }
    },(err)=>{
          console.log(err);
          
    });
  }

  Buysub(){
    this.subscriptionService.Buysub(this.user.id,this.pack).subscribe((res)=>{
            //console.log(res.json());
            this.getsubscription();
           // location.reload();
    },(err)=>{
        console.log(err);
    });
    
  }


}

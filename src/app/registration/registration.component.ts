import { Component, OnInit } from '@angular/core';
//import { registration } from './registrtion';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';
import { User } from './User1';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  //model: any={};
  user = new User();
  constructor(private router:Router,private _RegistrationService:RegistrationService) { }

  ngOnInit() {
  }

  RegisterUser():void {
    this._RegistrationService.AddUser(this.user).subscribe((responsed) => {console.log(responsed);
                                                            this.router.navigateByUrl('/');},
                                                            (error)=>{console.log(error);
                                                            this.router.navigateByUrl('/Registration')});

  }


}

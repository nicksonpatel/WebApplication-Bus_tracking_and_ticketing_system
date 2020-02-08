import { Component, OnInit } from '@angular/core';
import { User } from '../registration/User1';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  U: User;
  user:Object;
  constructor() { }

  ngOnInit() {
     this.U=JSON.parse(localStorage.getItem("Userdetails"));
  }

}

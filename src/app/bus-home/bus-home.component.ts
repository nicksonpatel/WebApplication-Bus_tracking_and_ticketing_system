import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {Bus} from '../login-bus/bus';

@Component({
  selector: 'app-bus-home',
  templateUrl: './bus-home.component.html',
  styleUrls: ['./bus-home.component.css']
})
export class BusHomeComponent implements OnInit {

  lat: number;
  lng: number;
  buslogin:boolean;
  bus:Bus;
  constructor(private router:Router,private fireDatabase:AngularFireDatabase) { 
    if(localStorage.getItem('buslog') == "true") {
      this.bus=JSON.parse(localStorage.getItem("BusLogin"));
      this.buslogin = true;
    } else {
      console.log("null not ok");
      this.buslogin = false;
    }

    navigator.geolocation.watchPosition((position: Position) => {
      this.lat=position.coords.latitude;
      this.lng=position.coords.longitude;
      this.updatelocation(this.lat,this.lng);
  },
  (error: PositionError) => {

      console.log('Geolocation service: ' + error.message);
      console.log(error);
  });
  }

  ngOnInit() {
    if(this.buslogin!=true){
      this.router.navigateByUrl('/buslogin');
    }
  }
  updatelocation(lat:number,lng:number){
    console.log("lat:"+lat,"lng:"+lng);
    this.fireDatabase.database.ref().child(this.bus.bus_id.toString()).update({
      lng:lng,
      lat:lat
       });
  }
}

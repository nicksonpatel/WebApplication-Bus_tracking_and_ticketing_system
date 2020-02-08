import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {MapService} from './map-view.service';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  title: string = 'Live Location of Bus';
  lat: number;
  lng: number;
  locationlist:AngularFireList<any>;
  distance:string;
  timeduration:string;
  source:string;
  destination:string;


  constructor(private fireDatabase:AngularFireDatabase,private mapservice:MapService,private Activeroute:ActivatedRoute) {
     
   } 
  ngOnInit() {
      let busid=this.Activeroute.snapshot.params['foo'];
      this.locationlist=this.fireDatabase.list(busid);   //bus id
     
      this.getbuslocation();
      
      this.getcurrentlocation();

  }  


  getbuslocation(){
    let source:string;
    this.locationlist.snapshotChanges().subscribe(res=>{
      console.log("lat:"+res[0].payload.val());
      console.log("lng:"+res[1].payload.val());
      this.lat=res[0].payload.val();
      this.lng=res[1].payload.val();
      this.source=this.lat+","+this.lng;
      console.log(this.source);
    },err=>{
      console.log(err);
    });
  }


  getcurrentlocation(){
    let curlat=null;
    let curlng=null;
    let desti=null;
    navigator.geolocation.getCurrentPosition((position)=>{
      curlat=position.coords.latitude;
      curlng=position.coords.longitude;
      this.destination=curlat+","+curlng;
      console.log("desti--"+this.destination);
  },(err)=>{
    console.log("error reading currunt loaction");
  });
  }


  gettrafficinfo(){

    console.log("in traffic info:"+this.source);
    console.log("in traffic info:"+this.destination);
    this.mapservice.gettrafiicInfo(this.source,this.destination).subscribe((res)=>{
        this.distance=res.json().rows[0].elements[0].distance.text;
        this.timeduration=res.json().rows[0].elements[0].duration.text;
    },(err)=>{
        console.log(err);
    });

  }

}

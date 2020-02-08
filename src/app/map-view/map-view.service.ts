import { Injectable } from "@angular/core";
import {Http} from '@angular/http';



@Injectable()
export class MapService{



constructor(private http:Http){

}

gettrafiicInfo(source:string,destinations:string){
     //   console.log("source:"+source);
      //  console.log("destination"+destinations);
          let url= "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins="+source+"&destinations="+destinations+"&key=AIzaSyBe5SgoO6r0N9_bMgsIF1YIxzVeVeQILdE";
          //let url="https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=18.543309,73.786080&destinations=18.540862,73.830445&key=AIzaSyBe5SgoO6r0N9_bMgsIF1YIxzVeVeQILdE";       
       return  this.http.get(url);
    }
} 
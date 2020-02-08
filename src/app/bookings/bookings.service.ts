import { Injectable } from "@angular/core";
import {Http } from "@angular/http";


@Injectable()
export class Bookings{
    constructor(private http:Http){
    }

    bookings(userid:Int32Array){
        let url="http://localhost:8080/api/getalltickets/"+userid;
        return this.http.get(url);
    }

}
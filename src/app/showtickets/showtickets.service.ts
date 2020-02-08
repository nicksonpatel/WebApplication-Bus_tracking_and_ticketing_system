import { Injectable } from "@angular/core";
import {Http } from "@angular/http";
import {Request,Response,Headers,RequestOptions} from '@angular/http';
import { Body } from "@angular/http/src/body";
import { Bus } from "./bus";

@Injectable()
export class Showtickets{
    constructor(private http:Http){
    }

    ticketsShow(busid:Int32Array){
        let url="http://localhost:8080/api/getallticketsbyBusid/"+busid;
        return this.http.get(url);
    }

}
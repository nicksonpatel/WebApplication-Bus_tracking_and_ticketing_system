import { Injectable } from "@angular/core";
import {Http } from "@angular/http";
import {Request,Response,Headers,RequestOptions} from '@angular/http';
import {Observable}  from 'rxjs/Observable';



@Injectable()
export class TicketService{


    constructor(private http:Http){
    }
 
    genrateticket(busid:Int32Array,source:string,destination:string,mobile:string){
        let body={
            'busid':busid,
            'source':source,
            'destination':destination,
            'mobile':mobile
        };
        let headers=new Headers({'Content-type':'application/json'});
        let options=new RequestOptions({headers:headers});
        let url="http://localhost:8080/api/bus/ticketgenrate";
        return this.http.post(url,body,options);
    }


}
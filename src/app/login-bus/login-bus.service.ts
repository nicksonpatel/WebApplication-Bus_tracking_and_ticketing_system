import { Injectable } from "@angular/core";
import {Http } from "@angular/http";
import {Request,Response,Headers,RequestOptions} from '@angular/http';
import {Observable}  from 'rxjs/Observable';
import { Body } from "@angular/http/src/body";
import { Bus } from "./bus";

@Injectable()
export class BusService{

constructor(private http:Http){

}

    sendOTP(busid:Int32Array){
        let body=busid;
        let headers=new Headers({'Content-type':'application/json'});
        let options=new RequestOptions({headers:headers});
        let url="http://localhost:8080/api/otprequest";
        return this.http.post(url,body,options);
    }

    verifyOTP(otp:string,busid:Int32Array){
        let body={
            'otp':otp,
            'busid':busid
        };
        let headers=new Headers({'Content-type':'application/json'});
        let options=new RequestOptions({headers:headers});
        let url="http://localhost:8080/api/verifyotp";
        return this.http.post(url,body,options);

    }
}
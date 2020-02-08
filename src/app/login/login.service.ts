import { Injectable } from "@angular/core";
import {Http } from "@angular/http";
import {Login} from "./login";
import {Request,Response,Headers,RequestOptions} from '@angular/http';
import {Observable}  from 'rxjs/Observable';
import { User } from "../registration/User1";




@Injectable()
export class LoginService{

    constructor(private http:Http){

    }

    Userlogin(user:Login){
        let body=JSON.stringify(user);
        let headers=new Headers({'Content-type':'application/json'});
        let options=new RequestOptions({headers:headers});
        // console.log(body);
        return this.http.post("http://localhost:8080/api/login",body,options); 
    }

}
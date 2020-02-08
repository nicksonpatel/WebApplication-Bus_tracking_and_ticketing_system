import {Http,Request,Response,Headers,RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
//import { registration } from './registrtion';
import { User } from './User1';

@Injectable()
export class RegistrationService{

    constructor(private _httpService:Http){

    }

    AddUser(user : User){
        //console.log("in service adduser "+user);
        let body=JSON.stringify(user);
        let headers=new Headers({'Content-type':'application/json'});
        let options=new RequestOptions({headers:headers}); 
        console.log("in body"+body);
        return this._httpService.post("http://localhost:8080/api/register",body,options);
    }
}
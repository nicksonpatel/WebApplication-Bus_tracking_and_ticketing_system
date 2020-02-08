import { Injectable } from "@angular/core";
import {Http,Headers,RequestOptions} from '@angular/http';
//import {} from ';


@Injectable()
export class SubscriptionService{

constructor(private http:Http){

    }

    getsubscription(id:Int32Array){
        console.log(id);
        return this.http.get("http://localhost:8080/api/user/getsubsription/"+id);
    }

    Buysub(id:Int32Array,pack:Int32Array){
        let body={
            'id':id,
            'pack':pack
        }
        let headers=new Headers({'Content-type':'application/json'});
        let options=new RequestOptions({headers:headers}); 
        console.log("in body"+body);
        return this.http.post("http://localhost:8080/api/user/buysub",body,options);
    }

} 
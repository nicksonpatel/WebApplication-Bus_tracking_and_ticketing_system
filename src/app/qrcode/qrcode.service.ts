import { Injectable } from "@angular/core";
import {Http,Headers,RequestOptions} from '@angular/http';



@Injectable()
export class QRcodeService{

constructor(private http:Http){

    }

    verifysubscription(data:string){
        return this.http.get("http://localhost:8080/api/subscription/checksubsription/"+data);
    }

}
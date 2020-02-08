import { Injectable } from "@angular/core";
import {Observable}  from 'rxjs/Observable';
import {Http,RequestOptions,Headers} from '@angular/http';

@Injectable()
export class SearchService{

    constructor(private http:Http){

    }

    Searchbus(source:string,destination:string){
        console.log("========"+source,destination);
        return this.http.get("http://localhost:8080/api/getlist/"+source+"/"+destination); 
    }
}
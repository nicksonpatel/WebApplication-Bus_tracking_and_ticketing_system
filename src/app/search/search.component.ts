import { Component, OnInit } from '@angular/core';
import {SearchService} from './search.service';
import {Bus} from '../showtickets/bus';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  source:string;
  destination:string;
 // Bus=new Array<Bus>();
  Bus:Bus[];
  busid=15;
  obj:object[];
  obj1:object[];
  constructor(private searchSerice:SearchService) {
   }
      
  ngOnInit() {
  }

  Serarchbus(){
    console.log("src= "+this.source+" des= "+this.destination);
    this.searchSerice.Searchbus(this.source,this.destination).subscribe((res)=>
    {
      
      console.log("from database=="+res.json());
      this.obj=res.json();
      this.sortbus();
    },(err)=>{
      console.log(err);
    });
  }

  sortbus(){
    this.Bus=new Array<Bus>();
    console.log("in sort bus");
    this.obj.forEach(res=>{
        console.log(res['routes'][0]['buses'][0]);
        this.Bus.push(res['routes'][0]['buses'][0]);
        });
      console.log(this.Bus);
    }
}
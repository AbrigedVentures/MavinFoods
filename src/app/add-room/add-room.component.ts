import { Component, OnInit } from '@angular/core';
import {Http,Headers,RequestOptions,Response} from "@angular/http";
import {Observable} from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';





export class Room
{
   Rid:string;
   Block:string;
   Floor:number;
   Allocated:boolean;
   
}





@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

   room:Room=new Room();
   headers:Headers;
  options:RequestOptions;
  constructor(private _http:Http) {
     this.headers = new Headers({ 'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers });
   }

  ngOnInit() {
  }

InsertRoom()
  {
       this._http.post("http://localhost:54647/api/rooms",JSON.stringify(this.room),this.options)
       .subscribe(res=>console.log(res)); 
 

       alert("A Room has been added");
 
        this.room=
          {
           Rid:'',
           Block:'',
           Floor:null,
           Allocated:false
          }
        

  }

}



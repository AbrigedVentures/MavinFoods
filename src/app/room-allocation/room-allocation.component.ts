import { Component, OnInit } from '@angular/core';
import {User} from "../user-reg/user-reg.component";
import {Room} from "../add-room/add-room.component";
import {Http,Headers,RequestOptions,Response,RequestMethod} from "@angular/http";
import {Observable} from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import {TrackserviceService} from "../trackservice.service";
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-room-allocation',
  templateUrl: './room-allocation.component.html',
  styleUrls: ['./room-allocation.component.css'],
  providers:[TrackserviceService]
})
export class RoomAllocationComponent implements OnInit {

  users:User[];
  room:Room;
    headers:Headers;
  options:RequestOptions;
  constructor(private ts:TrackserviceService,private _http:Http,private router:Router) {
    this.headers = new Headers({ 'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers });
   }

  ngOnInit() {
    this.users=null;
    this.ts.getusers()
    .subscribe((data)=>{this.users=data,console.log(this.users)
    });
  }

  allocateRoom(user:User) :void 
  {
    // var r:any;
    // this.ts.getEmptyRoom()
    // .subscribe((data)=> { this.room=data[0];
    //                       console.log(this.room);
    //                       if(this.room!=null)
    //                       {
    //                         this._http.post("http://localhost:54647/api/users/"+user.mid+"/data",JSON.stringify(this.room),this.options)
    //                         .subscribe(res=>console.log(res)); 
    //                       }
    //                       else
    //                         {
    //                           alert("no rooms available");
    //                         }
                          
    // });
    //    this.ts.getusers()
    // .subscribe((data)=>{this.users=data,console.log(this.users)
    // });  
    this.router.navigate(["/choose"]);
    

  }

}

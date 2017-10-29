import { Component, OnInit } from '@angular/core';
import {Http,Headers,RequestOptions,Response} from "@angular/http";
import {Observable} from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import {TrackserviceService} from "../trackservice.service";
import { FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';
import {RoomAllocationComponent} from '../room-allocation/room-allocation.component';

export class User
{
   mid:string;
   Name:string;
   Track:string;
   Gender:string;
   Rid:string;
}

export class Gender{
  sex:string;
}


@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css'],
  providers:[TrackserviceService,RoomAllocationComponent]
})
export class UserRegComponent implements OnInit {
//From requirements start
  userForm:FormGroup;
  
  mid : string;
  Name: string;
  Track: string;
  Gender: string; 

  post:any;
//forms requirement ends
  user:User=new User();
  gender:Gender[]=[
    {sex:"Male"},
    {sex:"Female"}
  ];
  tracks:any[];
  headers:Headers;
  options:RequestOptions;


  constructor(private _http:Http,private ts:TrackserviceService,private RoomAllocate:RoomAllocationComponent,private fb:FormBuilder) {
     this.headers = new Headers({ 'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers });

    this.userForm=fb.group({
     
      'mid': [null,Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern("[a-zA-Z][0-9]*")])],
      'Name' :[null,Validators.required],
       'Track': [null,Validators.required],
       'Gender':[null,Validators.required]

    });


   }

   




  ngOnInit() {
    //this.mid=new FormControl('',[Validators.required])
    this.ts.getTracks()
    .subscribe((data)=>{this.tracks=data,
         console.log(this.tracks)
    }
    
    );
  
  }

  InsertUser(post)
  {
      this.user.mid=post.mid;
      this.user.Name=post.Name;
      this.user.Track=post.Track;
      this.user.Gender=post.Gender;
      this.user.Rid=null;

       this._http.post("http://localhost:54647/api/users",JSON.stringify(this.user),this.options)
       .subscribe(res=>console.log(res)); 
 
       this.ts.getusers()
       .subscribe((data)=>this.RoomAllocate.users=data);

       alert("A User been Registered");
 
       
         window.location.reload();
  }
}

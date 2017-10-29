import { Component, OnInit,ViewChild } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {User} from "../user-reg/user-reg.component";
import {Http,Response} from "@angular/http";
import {TrackserviceService} from "../trackservice.service";
import {MatPaginator,MdTab,MdButton,MdTable} from "@angular/material";
import {MdCard} from "@angular/material";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {Room} from "../add-room/add-room.component";
@Component({
  selector: 'app-choose-room',
  templateUrl: './choose-room.component.html',
  styleUrls: ['./choose-room.component.css'],
  providers:[TrackserviceService]
})
export class ChooseRoomComponent implements OnInit {

  firstfloor=firstRooms; 
  secondfloor=secondRooms;
  tableColumns=['MId','Name','Gender','Track','Room'];
   datas=data;
dataSource:GetDataFromDataBase;
  constructor(private ts:TrackserviceService) { } 

  @ViewChild(MatPaginator) paginator:MatPaginator;
   ngOnInit() {
    localStorage.setItem("approve","false");
    this.ts.getRooms()
     .subscribe((result)=> {
        firstRooms.length=0;
        secondRooms.length=0;
         
         result.forEach(room=>{
           if(room.Floor==1)
            {
              firstRooms.push(room);
            }
           else if(room.Floor==2)
            {
               secondRooms.push(room);
            }
         });
          
     });


     this.ts.getusers()
      .subscribe((result)=>{
        data.length=0;
        result.forEach(user => {

         data.push(user);
          
        })
       


      },
    
       (err) => console.error(err),
      
      () =>{ console.log("observable complete"),
       this.dataSource =new GetDataFromDataBase(this.paginator);
       


      }
    
    );

      
        
  }
       
 ngAfterViewInit()
 {
  
 }

}


const firstRooms : Room[] = [];
const secondRooms : Room[] = [];


const data : User[] = [
  
  
  
];
export class GetDataFromDataBase extends DataSource<any>
{
   // http:Http;
    //users:User[];
   // ts:TrackserviceService = new TrackserviceService(this.http);

    constructor(private _paginator: MatPaginator) {
    super();
  }
  //  connect():Observable<any>
  //   {
  //      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
  //     //return data.splice(startIndex, this._paginator.pageSize);
  //   console.log(startIndex+" "+this._paginator.pageSize);
  //     return Observable.of(
        
  //       data.splice(startIndex,this._paginator.pageSize));
        
  //   }

        connect(): Observable<User[]> {
    const displayDataChanges = [
      data,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const datatodisplay = data.slice();

      // Grab the page's slice of data.
      
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return datatodisplay.splice(startIndex, this._paginator.pageSize);
    });
  }
               
    
    
    disconnect() {

    }
}
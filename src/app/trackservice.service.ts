import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {User} from './user-reg/user-reg.component';
import {Room} from './add-room/add-room.component';

export class Tracks {

}
@Injectable()
export class TrackserviceService {

  private UserList = new Observable<User[]>();

  constructor(private http: Http) { }

  getTracks(): Observable<Tracks[]> {
    // return this.http.get("http://localhost:54647/api/tracks")
    // .map((res:Response)=><Tracks[]>res.json());

     return this.http.get( 'http://localhost:54647/api/tracks' )
    .map(function(res: Response){
      return <Tracks[]>res.json();
      });
  }


  getusers(): Observable<User[]> {
     return this.http.get('http://localhost:54647/api/users' )
     .map((res: Response) => <User[]>res.json());
  }

  getEmptyRoom(): Observable<Room> {
      return this.http.get('http://localhost:54647/api/rooms')
      .map((res: Response) => <Room>res.json());
  }

  getRooms(): Observable<Room[]> {
    return this.http.get('http://localhost:54647/api/rooms')
      .map((res: Response) => <Room[]>res.json());
  }


}

import { Injectable } from '@angular/core';
import { CanActivate , Router, CanLoad} from '@angular/router';

@Injectable()
export class AllocateGaurdService implements CanLoad {

  constructor(private route: Router) { }
  admin:string = localStorage.getItem( 'approve' );
  // canActivate() {
  //   if ( localStorage.getItem( 'approve' ) === 'true') {
  //      return true;
  //      }
  //     this.route.navigate(['/app-home']);
  //     return false;
  // }

  canActivateMock(key:string)
  {
     if ( key === 'true') {
       return true;
       }
      this.route.navigate(['/app-home']);
      return false;
  }
   canLoad()
  {
     if(localStorage.getItem("approve")=="true")
       { return true; }
      this.route.navigate(['/app-home']);
      return false;
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  passkey: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
      let images = ['/assets/images/mindtree1.jpg', '/assets/images/kalinga.jpg', '/assets/images/mindtree2.jpg'];
      window.setInterval(function(){
      document.getElementById('home').style.backgroundImage = 'url(' + images[Math.floor(Math.random() * ( 2 - 0 + 1 ) + 0 ) ] + ')';
}, 3000);
    }
   check() {
      if ( this.passkey === 'admin') {
          localStorage.setItem( 'approve' , 'true' );
        } else {
            localStorage.setItem('approve' , 'false');
          }
       this.router.navigate(['/choose']);

    }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,FormControl} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomAllocationComponent } from './room-allocation/room-allocation.component';
import { lazyroutes } from './app.route'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTableModule,MatTabsModule } from '@angular/material';
import {MdPaginatorModule,MatCardModule,MdButtonModule} from "@angular/material";
import { RouterModule, Routes,CanActivate } from '@angular/router';
import {AllocateGaurdService} from "./allocate-gaurd.service";

import 'hammerjs';

const appRoutes:Routes=[
  {
   path:'',
   component:HomeComponent  
},
   {
   path:'app-home',
   component:HomeComponent  
}
 ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UserRegComponent,
    AddRoomComponent,
    RoomAllocationComponent,
    
    //ChooseRoomComponent
  ],
  imports: [
     RouterModule.forRoot(appRoutes), 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdTableModule,
    MatCardModule,
    MdPaginatorModule,
    MatTabsModule,
    MdButtonModule,
    lazyroutes
  
  ],
  providers: [AllocateGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }

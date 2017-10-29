import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseRoomComponent} from '../choose-room/choose-room.component';
import { RouterModule, Routes,CanActivate } from '@angular/router';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTableModule,MatTabsModule } from '@angular/material';
import {MdPaginatorModule,MatCardModule,MdButtonModule} from "@angular/material";

const appRoutes:Routes=[
  {
   path:'',
   component:ChooseRoomComponent
}];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild(appRoutes),
    // BrowserAnimationsModule,
     MdButtonModule,MdTableModule,MatTabsModule,MatCardModule,MdPaginatorModule
    
  ],
  declarations: [
    ChooseRoomComponent
  ],
   providers: [],
  bootstrap:[]
})
export class ChooseModule { }

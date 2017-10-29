import { NgModule,ModuleWithProviders }     from '@angular/core';
import {
  RouterModule, Routes,CanLoad
} from '@angular/router';
import {AllocateGaurdService} from "./allocate-gaurd.service";

const routes: Routes = [

   {
    path:'choose',
    loadChildren: 'app/choose/choose.module#ChooseModule',
    canLoad:[AllocateGaurdService]

  },



];

  export const lazyroutes : ModuleWithProviders = RouterModule.forRoot(routes);
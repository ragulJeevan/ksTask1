import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DisplayComponent } from './display/display.component';
import { MapComponent } from './map/map.component';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
    {path:"home",component:DisplayComponent},
    {path:"map",component:MapComponent},
    {path:"user",component:UserDataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
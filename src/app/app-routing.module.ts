import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './task/display/display.component';

const routes: Routes = [
  {path:"",component:DisplayComponent},
  {path:"task",loadChildren:()=>import('./task/task.module').then(mod=>mod.TaskModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

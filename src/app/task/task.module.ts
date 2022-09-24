import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { UserDataComponent } from './user-data/user-data.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from '../home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, ROUTES } from '@angular/router';
import { TaskRoutingModule } from './task-routing.module';
import { DisplayComponent } from './display/display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    MapComponent,
    UserDataComponent,
    HomeComponent,
    DisplayComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    TaskRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UserDataComponent,MapComponent,HomeComponent,DisplayComponent,DialogComponent
  ]
})
export class TaskModule { }

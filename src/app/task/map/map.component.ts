import { Component, OnInit, } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';


import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import * as ol from 'ol';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import * as olGeom from 'ol/geom';
import TileLayer from 'ol/layer/Tile';
import { Feature } from 'ol';
import SourceVector from 'ol/source/Vector';
import { MapService } from 'src/app/Services/map.service';
import { DisplayComponent } from '../display/display.component';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mForm!:FormGroup;
  locationName:any;
  locationDescription:any;
  marker:any;
  longitude!:number;
  latitude!:number;
  detail:any;
  map:any;
  check:any;
  constructor( private mark:MapService,private fb:FormBuilder,public dialog: MatDialog) { }

  ngOnInit(): void {
        this.detail=this.getDetail();
        //map
        var map = new ol.Map({
          target: 'show_map',
          layers: [
            new TileLayer({
              source: new OSM()
            }),
            //vector
          ],
          view: new View({
            center: olProj.fromLonLat([76,11]),
            zoom: 3,
          })
        });
        this.addMarker();
        map.addLayer(this.marker);
        map.on('singleclick',(evt) =>{
          var lonLat = olProj.toLonLat(evt.coordinate);
          console.log(lonLat[0]);
          console.log(lonLat[1]);
          this.longitude = lonLat[0];
          this.latitude = lonLat[1];
          this.addMarker();
          map.addLayer(this.marker);
           this.openDialog();  
        });
        /* form controls */
        this.mForm = this.fb.group(
          {
           placeName: new FormControl(),
           latitude: new FormControl(),
           longitude: new FormControl(),
           formDescription : new FormControl()
          }
        )
  }
putForm(){
  this.mark.putDialog(this.mForm.value);
}
getDetail(){
  return this.mark.getDetail();
}

  addMarker(){
    this.marker = new VectorLayer(
      {
        source : new SourceVector({
        features : [
          new Feature({
            geometry : new olGeom.Point(olProj.fromLonLat([76,11]))
          }),
          new Feature({
            geometry : new olGeom.Point(olProj.fromLonLat([this.longitude,this.latitude]))
          }),
        ]
        })
      }
    );
  }
  openDialog() {
    this.dialog.open(DialogComponent);
  }
  populate(){
    return this.mForm = this.detail;
  }
  update(){
    localStorage.setItem('value',JSON.stringify(this.mForm.value));
    this.mark.putDialog(this.mForm.value)    
    this.getDetail();
    this.mForm.reset();
    this.mark.putDialog(this.mForm.value);
  }

}


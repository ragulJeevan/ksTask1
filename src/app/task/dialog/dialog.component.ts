import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MapService } from 'src/app/Services/map.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  dForm!:FormGroup;
  lattidue!:number;
  longitude!:number;

  constructor(private fb:FormBuilder,private map:MapService) { }

  ngOnInit(): void {
            /* form controls */
            this.dForm = this.fb.group(
              {
               placeName: new FormControl(),
               latitude: new FormControl(),
               longitude: new FormControl(),
               formDescription : new FormControl()
              }
            );

  }
  save(){
    this.map.putDialog(this.dForm.value);
    console.log(this.dForm.value);
    localStorage.setItem('value',JSON.stringify(this.dForm.value))
    
  }
}

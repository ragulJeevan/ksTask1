import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goto(){
    window.alert("Thank ou for the oppurtunity")
    this.route.navigate([""]);
  }
  gotoMap(){
   return this.route.navigate(["/map"]);
  }
  gotoUsers(){
   return this.route.navigate(["/user"])
  }

}

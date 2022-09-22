import { Injectable } from '@angular/core';
import { Map } from '../task/map';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  storeData!:any
  detail=[
    {
      "placeName": "Chennai", 
      "latitude": 44,
      "longitude": 32,
      "formDescription": "This is Chennai Capital of TamilNadu"
  }
  ];

  constructor() { }
putDialog(data:any){
  this.detail.push(data);
}
getDetail(){
  return this.detail;
}
// loc(){
//    this.storeData = localStorage.getItem('value');
//     return this.detail.push(this.storeData);  
// }



}

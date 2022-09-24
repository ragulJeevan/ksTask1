import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  searchString:string="";
  public result:any;
  searchValue:any;
  displayedColumns:string[]=[ "avatar","ID","NAME","SCORE"];
  toTable =true;
  
  constructor( private table:UsersService ){}
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.table.getResult().subscribe(res=>{
      console.log(res.items);
      this.result=res.items;
    })
  }
  search(){
        if(this.searchString!==""){
          this.result = this.result.filter((val:any)=>{
             return val.id == this.searchString || val.login == this.searchString;
          });  
        }else{
          return this.ngOnInit()
        }
      }
      toggle1(){
        this.toTable = false;
      }
      toggle2(){
        this.toTable = true;
      }

}

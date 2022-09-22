import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http : HttpClient ) { }

  getResult():Observable<any>{
    return this.http.get("https://api.github.com/search/users?q=test&page=1");
  }
}

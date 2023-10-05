import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Components } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(){
    return this.http.get<Components[]>('/assets/data/menu-opts.json');
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  delay } from 'rxjs';
import { Components } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataModal!:any;

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbums(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuOpts(){
    return this.http.get<Components[]>('/assets/data/menu-opts.json');
  }


  getHeros(){
    return this.http.get<Components[]>('/assets/data/superheroes.json')
    .pipe(
      delay(1500)
    );
  }



}

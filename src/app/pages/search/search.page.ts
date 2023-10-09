import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums:any[] =[];

  textSearch:string = '';

  constructor( private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe( albums => {
      this.albums = albums;
    });
  }

  onSearchChange(e:any){
    this.textSearch = e.detail.value;

  }

}

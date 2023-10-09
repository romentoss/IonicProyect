import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeros!: Observable<any>;

  publisher:string = '';

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.superHeros = this.dataService.getHeros();
  }

  segmentChanged(e:any){
    if(e.detail.value === 'all'){
      return this.publisher = '';
    }
    return this.publisher = e.detail.value;
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  users!:Observable<any>;

  @ViewChild(IonList) ionList!:IonList;

  constructor( private dataService:DataService) { }

  ngOnInit() {
    this.users = this.dataService.getUser();
  }

  share(user:any){
    console.log('Shared',{user});
    this.ionList.closeSlidingItems();
  }
  favorite(user:any){
    console.log('Fab', {user});
    this.ionList.closeSlidingItems();
  }
  delete(user:any){
    console.log('Delete :',user.name);
    this.ionList.closeSlidingItems();

  }

}

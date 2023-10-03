import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  fab:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addFavorite(){
    this.fab = !this.fab;
  }

}

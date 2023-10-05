import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes:string[] = ['Aquaman','Superman','Batman','Mujer Maravilla','Hulk','Flash']

  reorderDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  doReorder(event:any){

    //use to move elements in array based ion reorder list
    const itemMove = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to,0,itemMove)
    console.log(itemMove);


    event.detail.complete();

    console.log(this.personajes);

  }
}

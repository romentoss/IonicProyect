import { Component, OnInit } from '@angular/core';


interface Components {
  icon:string,
  name:string,
  redirectTo:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components:Components[] = [
    {
      icon:'american-football-outline',
      name:'Action Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon:'alert-circle-outline',
      name:'Alert',
      redirectTo:'/alert'
    },
    {
      icon:'beaker-outline',
      name:'Avatar',
      redirectTo:'/avatar'
    },
    {
      icon:'radio-button-off-outline',
      name:'Bottons',
      redirectTo:'/button'
    },
    {
      icon:'card-outline',
      name:'Cards',
      redirectTo:'/card'
    },
    {
      icon:'checkmark-circle-outline',
      name:'Checks',
      redirectTo:'/check'
    },
    {
      icon:'calendar-outline',
      name:'DateTime',
      redirectTo:'/date-time'
    },
    {
      icon:'car-outline',
      name:'Fab',
      redirectTo:'/fab'
    },
    {
      icon:'grid-outline',
      name:'Grid',
      redirectTo:'/grid'
    },
    {
      icon:'infinite-outline',
      name:'Infinite',
      redirectTo:'/infinite'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

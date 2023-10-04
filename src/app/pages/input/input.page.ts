import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  name:string = "romen";

  text!:string;

  user:{email:string, password:string}= {
    email:'',
    password:''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    console.log('submit');
    console.log(this.user);
    console.log(form);


  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() name!:string;
  @Input() pais!:string;

  data:any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  noArgumentsClose(){
    this.modalCtrl.dismiss();
  }

  ArgumentsClose(){
    this.modalCtrl.dismiss({
      nombre:'Romen',
      pais: 'España'
    })
  }


}

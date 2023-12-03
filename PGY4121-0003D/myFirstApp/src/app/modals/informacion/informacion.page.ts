import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Informacion } from 'src/app/models/informacion';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

@Input() dataModal:Informacion[]=[];

  constructor(private modalController:ModalController) { }

  ngOnInit() {
    console.log("Información modal", this.dataModal);
    
  }

  close(){
    this.modalController.dismiss();
  }

}

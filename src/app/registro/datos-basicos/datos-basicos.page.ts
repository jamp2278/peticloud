import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TerminosPage } from '../terminos/terminos.page';

@Component({
  selector: 'app-datos-basicos',
  templateUrl: './datos-basicos.page.html',
  styleUrls: ['./datos-basicos.page.scss'],
})
export class DatosBasicosPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  
  
  }


  async continuarRegistro(){
    const modal = await this.modalController.create({
      component: TerminosPage
    });
    return await modal.present();
  }

}

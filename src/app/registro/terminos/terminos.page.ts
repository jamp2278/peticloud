import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, Config } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.page.html',
  styleUrls: ['./terminos.page.scss'],
})
export class TerminosPage implements OnInit {
  
  constructor(public modalController: ModalController,private router: Router,private config: Config,public navCtrl: NavController ) { }

  ngOnInit() {

  }

cerrar(){
  this.navCtrl.navigateRoot("registro/datoscontacto")  
//this.router.navigateByUrl('registro/datoscontacto')
  this.modalController.dismiss()

}
  
}

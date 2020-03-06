import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { TerminosPage } from './terminos/terminos.page';
import { Router } from '@angular/router';
import { DatosContactoPage } from './datos-contacto/datos-contacto.page';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  // Our translated text strings
  private loginErrorString: string;
  private opt: string = 'ingresar';
  password:any='';
  confPassword:any='';
  email:any='';
  constructor(public modalController: ModalController,private router: Router,public alertController: AlertController) { }

  ngOnInit() {

  }


  async alertarError(mensaje) {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Valida tus datos',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
  validarDatos(){

    if(this.email===''){
      this.alertarError("Ingrese su email")
      return false;
    }
    if(this.password===''){
      this.alertarError("Ingrese su contraseña")
      return false;
    }
    if(this.password===this.confPassword){
      return true
    }else{
      this.alertarError("Los correos no coinciden")
      return false;
    }
  }

  async presentModal() {
    if(this.validarDatos()){
    const modal = await this.modalController.create({
      component: TerminosPage
    });
    return await modal.present();
  }
  }
  
}

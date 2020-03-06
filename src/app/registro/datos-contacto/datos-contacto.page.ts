import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-datos-contacto',
  templateUrl: './datos-contacto.page.html',
  styleUrls: ['./datos-contacto.page.scss'],
})
export class DatosContactoPage implements OnInit {
celular:any=""
telefono:any=""
departamento:any=""
ciudad:any=""
direccion:any=""
  constructor(private router: Router,public alertController: AlertController) { }

  ngOnInit() {
  }
  suscripcion(){
    if(this.validarDatos()){
    this.router.navigateByUrl('registro/suscripcion')
    }else{
      console.log("error")
    }
  }

  validarDatos(){

    if(this.celular===''){
      this.alertarError("Ingrese su celular")
      return false;
    }
    if(this.telefono===''){
      this.alertarError("Ingrese su telefono")
      return false;
    }
    if(this.departamento===''){
      this.alertarError("Ingrese su departamento")
      return false;
    }
    if(this.ciudad===''){
      this.alertarError("Ingrese su ciudad")
      return false;
    }
    if(this.direccion===''){
      this.alertarError("Ingrese su telefono")
      return false;
    }
    return true;
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
}

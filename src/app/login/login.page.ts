import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform, NavController } from '@ionic/angular';
import { Config } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo:any=''
  password:any=''
  // Our translated text strings
  private loginErrorString: string;
  private opt: string = 'ingresar';
  constructor(private router: Router,public alertController: AlertController,private platform: Platform, private config: Config,public navCtrl: NavController ) { }

  async alertarError(mensaje) {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Valida tus datos',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
    if(this.platform.is("desktop")) {
      // disable the nav animations:
      this.config.set('navAnimation', null);
      // or disable all animations
      this.config.set('animated', false);
    }
  }

  validarDatos(){

    console.log(this.correo)
    if(this.correo===''){
      this.alertarError("Ingrese su usuario")
      return false;
    }
    if(this.password===''){
      this.alertarError("Ingrese su contraseña")
      return false;
    }
    if(this.password=='123' && this.correo=='123'){
      return true
    }else{
      this.alertarError("Correo o contraseña incorrectos")
      return false;
    }
  }


  doLogin() {
    if(!this.validarDatos()){
      return false;
    }else{   
       this.router.navigateByUrl('tabs')
  }
  }
  registrarse() {
  //  this.router.navigateByUrl('/registro');
this.navCtrl.navigateRoot("registro")  
}

  onChange(event){
    console.log(event)
  }


}

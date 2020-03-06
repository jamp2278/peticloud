import { Component } from '@angular/core';
import { Mascota } from '../model/mascota';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'mascotas.page.html',
  styleUrls: ['mascotas.page.scss']
})
export class MascotasPage {
 mascotas:Mascota[]=[
   {nombre:'Logan',raza:'Siames',edad:2,imagen:'./assets/img/gato2.jpg',novedades:true},
   {nombre:'Titan',raza:'Persa',edad:1,imagen:'./assets/img/gato1.jpg',novedades:false},
   {nombre:'Coco',raza:'Angora',edad:1,imagen:'./assets/img/gato3.jpg',novedades:true},
   {nombre:'Wolve',raza:'Nebelung',edad:1,imagen:'./assets/img/gato4.jpg',novedades:false}



 ]
  

  constructor(private router: Router) {}
  openDetailsWithQueryParams(mascota) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(mascota)
      }
    };
    this.router.navigate(['tabs/mascotas/detalle'], navigationExtras);
  }
}

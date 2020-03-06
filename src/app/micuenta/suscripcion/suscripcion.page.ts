import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Suscripcion } from 'src/app/model/suscripcion';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.page.html',
  styleUrls: ['./suscripcion.page.scss'],
})
export class SuscripcionPage implements OnInit {
  suscripciones:Suscripcion[]=[
    {nombre:'Plan mensual',valor:5000,descripcion:'Esta suscripcion te permite llevar tu mascota a las veterinarias mas cercanas, encontrando la mas indicada para tus necesidades de manera que puedas satisfacer todas las necesidades que requiera tu pequeña mascota.',
    imagen:'./assets/img/fondo.jpeg',id:1,vigencia:'1 mes'},
    {nombre:'Plan trimestral',valor:14000,descripcion:'Esta suscripcion te permite llevar tu mascota a las veterinarias mas cercanas, encontrando la mas indicada para tus necesidades de manera que puedas satisfacer todas las necesidades que requiera tu pequeña mascota.',
    imagen:'./assets/img/fondo2.jpg',id:2,vigencia:'2 meses'},
    {nombre:'Plan semestral',valor:24000,descripcion:'Esta suscripcion te permite llevar tu mascota a las veterinarias mas cercanas, encontrando la mas indicada para tus necesidades de manera que puedas satisfacer todas las necesidades que requiera tu pequeña mascota.',
    imagen:'./assets/img/fondo3.jpg',id:3,vigencia:'3 meses'},
    {nombre:'Plan anual',valor:46000,descripcion:'Esta suscripcion te permite llevar tu mascota a las veterinarias mas cercanas, encontrando la mas indicada para tus necesidades de manera que puedas satisfacer todas las necesidades que requiera tu pequeña mascota.',
    imagen:'./assets/img/fondo4.jpeg',id:4,vigencia:'1 año'}
 
 
 
  ]

  suscripcionActual:Suscripcion={nombre:'Plan semestral',valor:24000,descripcion:'Esta suscripcion te permite llevar tu mascota a las veterinarias mas cercanas, encontrando la mas indicada para tus necesidades de manera que puedas satisfacer todas las necesidades que requiera tu pequeña mascota.',
  imagen:'./assets/img/fondo3.jpg',id:3,vigencia:'3 meses'}
  constructor(private router: Router) { }

  ngOnInit() {
  }


  login(){
  this.router.navigateByUrl('login')
  }

  openDetailsWithQueryParams(plan) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(plan)
      }
    };
    this.router.navigate(['registro/suscripcion/detalle'], navigationExtras);
  }


  atras(){
    this.router.navigateByUrl('tabs/micuenta')
  }
}

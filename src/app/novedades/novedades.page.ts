import { Component, OnInit } from '@angular/core';
import { Mascota } from '../model/mascota';

@Component({
  selector: 'app-tab4',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
})
export class NovedadesPage implements OnInit {
  mascotas:Mascota[]=[
    {nombre:'Logan',raza:'Siames',edad:2,imagen:'./assets/img/gato2.jpg',novedades:true},
    {nombre:'Titan',raza:'Persa',edad:1,imagen:'./assets/img/gato1.jpg',novedades:false},
    {nombre:'Coco',raza:'Angora',edad:1,imagen:'./assets/img/gato3.jpg',novedades:true},
    {nombre:'Wolve',raza:'Nebelung',edad:1,imagen:'./assets/img/gato4.jpg',novedades:false}
 
 
 
  ]
  constructor() { }

  ngOnInit() {
  }

}

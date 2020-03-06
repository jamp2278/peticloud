import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.page.html',
  styleUrls: ['./historia-clinica.page.scss'],
})
export class HistoriaClinicaPage implements OnInit {

  constructor( private _location: Location) { }

  ngOnInit() {
  }
  atras(){
    this._location.back();

  }
}

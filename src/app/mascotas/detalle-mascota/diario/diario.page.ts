import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
})
export class DiarioPage implements OnInit {

  constructor( private _location: Location) { }

  ngOnInit() {
  }
  atras(){
    this._location.back();

  }
}

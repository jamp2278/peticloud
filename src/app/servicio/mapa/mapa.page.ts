import { Component, OnInit, ViewChild } from '@angular/core';
declare var google;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
map;
@ViewChild('mapElement',{static:true}) mapElement;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.map=new google.maps.Map(
      this.mapElement.nativeElement,{
        center:{lat:-34.397,lng:150.644},
        zoom:8
      }
    );
  }

}

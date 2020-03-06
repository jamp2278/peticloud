import { Mascota } from './../../model/mascota';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.page.html',
  styleUrls: ['./detalle-mascota.page.scss'],
})
export class DetalleMascotaPage implements OnInit {
  
  mascota:Mascota[]=[]
  constructor(private route: ActivatedRoute, private router: Router) {

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        let s:Mascota=JSON.parse(params.special)
        this.mascota.push(s);
      }
    });
    
}

ngOnInit() {
}

atras(){
  this.router.navigateByUrl('tabs/mascotas')
}
}
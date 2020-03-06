import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suscripcion } from 'src/app/model/suscripcion';

@Component({
  selector: 'app-detalle-suscripcion',
  templateUrl: './detalle-suscripcion.page.html',
  styleUrls: ['./detalle-suscripcion.page.scss'],
})
export class DetalleSuscripcionPage implements OnInit {
  data: Suscripcion[]=[]
  
  
  constructor(private route: ActivatedRoute, private router: Router) {

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        let s:Suscripcion=JSON.parse(params.special)
        this.data.push(s);
      }
    });
console.log(this.data)
   }

  ngOnInit() {
  }

  login(){
    this.router.navigateByUrl('login')
    }

  volver(){
    this.router.navigateByUrl('registro/suscripcion')
  }

  

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuscripcionPage } from './suscripcion.page';

const routes: Routes = [
  {
    path: '',
    component: SuscripcionPage
  },
  {
    path: 'detalle-suscripcion',
    loadChildren: () => import('./detalle-suscripcion/detalle-suscripcion.module').then( m => m.DetalleSuscripcionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuscripcionPageRoutingModule {}

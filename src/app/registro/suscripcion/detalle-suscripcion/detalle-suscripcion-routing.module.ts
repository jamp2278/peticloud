import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleSuscripcionPage } from './detalle-suscripcion.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleSuscripcionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleSuscripcionPageRoutingModule {}

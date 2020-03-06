import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPage } from './registro.page';

const routes: Routes = [{
  path: '',
    component: RegistroPage,
},
  {
    path: 'datos-contacto',
    loadChildren: () => import('./datos-contacto/datos-contacto.module').then( m => m.DatosContactoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMascotaPage } from './detalle-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleMascotaPage
  },
  {
    path: 'diario',
    loadChildren: () => import('./diario/diario.module').then( m => m.DiarioPageModule)
  },
  {
    path: 'citas',
    loadChildren: () => import('./citas/citas.module').then( m => m.CitasPageModule)
  },
  {
    path: 'historia-clinica',
    loadChildren: () => import('./historia-clinica/historia-clinica.module').then( m => m.HistoriaClinicaPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMascotaPageRoutingModule {}

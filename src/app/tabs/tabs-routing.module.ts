import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'red',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../red/red.module').then(m => m.RedPageModule)
          }
        ]
      },
      {
        path: 'servicio',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../servicio/servicio.module').then(m => m.ServicioPageModule),
            children: [{
              path: 'mapa',
              loadChildren: () => import('../servicio/mapa/mapa.module').then(m => m.MapaPageModule)
            },
            {
              path: '',
              loadChildren: () =>
                import('../servicio/servicio.module').then(m => m.ServicioPageModule)
            }
            ]
          }
        ]
      },
      {
        path: 'mascotas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../mascotas/mascotas.module').then(m => m.MascotasPageModule),
            children: [{
              path: '',
              loadChildren: () =>
                import('../mascotas/mascotas.module').then(m => m.MascotasPageModule)
            }, {

              path: 'detalle',
              loadChildren: () => import('../mascotas/detalle-mascota/detalle-mascota.module').then(m => m.DetalleMascotaPageModule),
              children: [
                {
                  path: '',
                  loadChildren: () => import('../mascotas/detalle-mascota/detalle-mascota.module').then(m => m.DetalleMascotaPageModule)
                },
                {
                  path: 'citas',
                  loadChildren: () =>
                    import('../mascotas/detalle-mascota/citas/Citas.module').then(m => m.CitasPageModule)
                },
                {
                  path: 'diario',
                  loadChildren: () =>
                    import('../mascotas/detalle-mascota/diario/Diario.module').then(m => m.DiarioPageModule)
                },
                {
                  path: 'historia-clinica',
                  loadChildren: () =>
                    import('../mascotas/detalle-mascota/historia-clinica/historia-clinica.module').then(m => m.HistoriaClinicaPageModule)
                },
                {
                  path: 'notificaciones',
                  loadChildren: () =>
                    import('../mascotas/detalle-mascota/notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule)
                }]
            }]
          }
        ]
      },
      {
        path: 'novedades',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../novedades/novedades.module').then(m => m.NovedadesPageModule)
          }
        ]
      },
      {
        path: 'micuenta',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../micuenta/micuenta.module').then(m => m.MiCuentaPageModule),
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../micuenta/micuenta.module').then(m => m.MiCuentaPageModule),
              },

              {
                path: 'suscripcion',
                loadChildren: () =>
                  import('../micuenta/suscripcion/suscripcion.module').then(m => m.SuscripcionPageModule)
              }
            ]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/mascotas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/mascotas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

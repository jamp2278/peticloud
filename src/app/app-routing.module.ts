import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
  },
  {
    path: 'registro/datosbasicos',
    loadChildren: () => import('./registro/datos-basicos/datos-basicos.module').then( m => m.DatosBasicosPageModule),
  },
  {
    path: 'registro/datoscontacto',
    loadChildren: () => import('./registro/datos-contacto/datos-contacto.module').then( m => m.DatosContactoPageModule),
  },
  {
    path: 'registro/suscripcion',
    loadChildren: () => import('./registro/suscripcion/suscripcion.module').then( m => m.SuscripcionPageModule)
  },

  {
    path: 'registro/suscripcion/detalle',
    loadChildren: () => import('./registro/suscripcion/detalle-suscripcion/detalle-suscripcion.module').then( m => m.DetalleSuscripcionPageModule)
  },
  {
    path: 'micuenta/suscripcion',
    loadChildren: () => import('./micuenta/suscripcion/suscripcion.module').then( m => m.SuscripcionPageModule)
  },
  
 
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

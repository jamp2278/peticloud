import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleSuscripcionPageRoutingModule } from './detalle-suscripcion-routing.module';

import { DetalleSuscripcionPage } from './detalle-suscripcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleSuscripcionPageRoutingModule
  ],
  declarations: [DetalleSuscripcionPage]
})
export class DetalleSuscripcionPageModule {}

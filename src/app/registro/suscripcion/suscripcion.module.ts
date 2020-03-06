import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuscripcionPageRoutingModule } from './suscripcion-routing.module';

import { SuscripcionPage } from './suscripcion.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    SuscripcionPageRoutingModule
  ],
  declarations: [SuscripcionPage]
})
export class SuscripcionPageModule {}

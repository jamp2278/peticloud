import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosBasicosPageRoutingModule } from './datos-basicos-routing.module';

import { DatosBasicosPage } from './datos-basicos.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosBasicosPageRoutingModule,
    ExploreContainerComponentModule,

  ],
  declarations: [DatosBasicosPage]
})
export class DatosBasicosPageModule {}

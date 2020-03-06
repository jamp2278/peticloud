import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { MiCuentaPage } from './micuenta.page';
import { RouterModule } from '@angular/router';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: MiCuentaPage }]),
    ExploreContainerComponentModule,

  ],
  declarations: [MiCuentaPage]
})
export class MiCuentaPageModule {}

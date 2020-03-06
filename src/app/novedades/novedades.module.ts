import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { NovedadesPage } from './novedades.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: NovedadesPage }])
  ],
  declarations: [NovedadesPage]
})
export class NovedadesPageModule {}

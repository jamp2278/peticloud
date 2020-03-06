import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminosPageRoutingModule } from './terminos-routing.module';

import { TerminosPage } from './terminos.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminosPageRoutingModule,
    ExploreContainerComponentModule,

    
  ],
  declarations: [TerminosPage],
  
})
export class TerminosPageModule {}

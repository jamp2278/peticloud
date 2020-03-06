import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {RegistroPageRoutingModule} from './registro-routing.module'
import { RegistroPage } from './registro.page';
import { TerminosPageModule } from './terminos/terminos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    TerminosPageModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}

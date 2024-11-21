import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiSuscripcionPageRoutingModule } from './mi-suscripcion-routing.module';

import { MiSuscripcionPage } from './mi-suscripcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiSuscripcionPageRoutingModule
  ],
  declarations: [MiSuscripcionPage]
})
export class MiSuscripcionPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionFechaResultadosPageRoutingModule } from './seleccion-fecha-resultados-routing.module';

import { SeleccionFechaResultadosPage } from './seleccion-fecha-resultados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionFechaResultadosPageRoutingModule
  ],
  declarations: [SeleccionFechaResultadosPage]
})
export class SeleccionFechaResultadosPageModule {}

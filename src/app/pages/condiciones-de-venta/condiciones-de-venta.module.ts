import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CondicionesDeVentaPageRoutingModule } from './condiciones-de-venta-routing.module';

import { CondicionesDeVentaPage } from './condiciones-de-venta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CondicionesDeVentaPageRoutingModule
  ],
  declarations: [CondicionesDeVentaPage]
})
export class CondicionesDeVentaPageModule {}

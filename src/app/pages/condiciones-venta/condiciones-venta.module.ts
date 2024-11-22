import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CondicionesVentaPageRoutingModule } from './condiciones-venta-routing.module';

import { CondicionesVentaPage } from './condiciones-venta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CondicionesVentaPageRoutingModule
  ],
  declarations: [CondicionesVentaPage]
})
export class CondicionesVentaPageModule {}

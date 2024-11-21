import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormularioDeCompatibilidadPageRoutingModule } from './formulario-de-compatibilidad-routing.module';

import { FormularioDeCompatibilidadPage } from './formulario-de-compatibilidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioDeCompatibilidadPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormularioDeCompatibilidadPage]
})
export class FormularioDeCompatibilidadPageModule {}

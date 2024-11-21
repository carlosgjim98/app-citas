import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurarMisDatosPageRoutingModule } from './configurar-mis-datos-routing.module';

import { ConfigurarMisDatosPage } from './configurar-mis-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurarMisDatosPageRoutingModule
  ],
  declarations: [ConfigurarMisDatosPage]
})
export class ConfigurarMisDatosPageModule {}

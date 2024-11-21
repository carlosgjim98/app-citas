import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosBloqueadosPageRoutingModule } from './usuarios-bloqueados-routing.module';

import { UsuariosBloqueadosPage } from './usuarios-bloqueados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosBloqueadosPageRoutingModule
  ],
  declarations: [UsuariosBloqueadosPage]
})
export class UsuariosBloqueadosPageModule {}

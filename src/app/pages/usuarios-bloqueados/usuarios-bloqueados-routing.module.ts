import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosBloqueadosPage } from './usuarios-bloqueados.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosBloqueadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosBloqueadosPageRoutingModule {}

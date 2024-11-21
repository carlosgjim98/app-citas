import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionFechaResultadosPage } from './seleccion-fecha-resultados.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionFechaResultadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionFechaResultadosPageRoutingModule {}

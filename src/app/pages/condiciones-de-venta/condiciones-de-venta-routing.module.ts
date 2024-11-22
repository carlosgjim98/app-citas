import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CondicionesDeVentaPage } from './condiciones-de-venta.page';

const routes: Routes = [
  {
    path: '',
    component: CondicionesDeVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CondicionesDeVentaPageRoutingModule {}

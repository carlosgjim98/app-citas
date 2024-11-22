import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CondicionesVentaPage } from './condiciones-venta.page';

const routes: Routes = [
  {
    path: '',
    component: CondicionesVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CondicionesVentaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiSuscripcionPage } from './mi-suscripcion.page';

const routes: Routes = [
  {
    path: '',
    component: MiSuscripcionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiSuscripcionPageRoutingModule {}

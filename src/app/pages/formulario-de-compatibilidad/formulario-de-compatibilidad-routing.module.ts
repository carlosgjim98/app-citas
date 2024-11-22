import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioDeCompatibilidadPage } from './formulario-de-compatibilidad.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioDeCompatibilidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioDeCompatibilidadPageRoutingModule {}

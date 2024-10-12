import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroVentasPage } from './registro-ventas.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroVentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroVentasPageRoutingModule {}

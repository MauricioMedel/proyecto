import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenCompraPage } from './orden-compra.page';

const routes: Routes = [
  {
    path: '',
    component: OrdenCompraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdenCompraPageRoutingModule {}

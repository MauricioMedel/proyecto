import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenCompraPageRoutingModule } from './orden-compra-routing.module';

import { OrdenCompraPage } from './orden-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenCompraPageRoutingModule
  ],
  declarations: [OrdenCompraPage]
})
export class OrdenCompraPageModule {}

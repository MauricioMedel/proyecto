import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroVentasPageRoutingModule } from './registro-ventas-routing.module';

import { RegistroVentasPage } from './registro-ventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroVentasPageRoutingModule
  ],
  declarations: [RegistroVentasPage]
})
export class RegistroVentasPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroProveedorPageRoutingModule } from './registro-proveedor-routing.module';

import { RegistroProveedorPage } from './registro-proveedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroProveedorPageRoutingModule
  ],
  declarations: [RegistroProveedorPage]
})
export class RegistroProveedorPageModule {}

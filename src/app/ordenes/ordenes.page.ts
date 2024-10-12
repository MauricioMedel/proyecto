import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.page.html',
  styleUrls: ['./ordenes.page.scss'],
})
export class OrdenesPage {

  // Lista de órdenes ficticias
  ordenes = [
    {
      proveedor: 'Proveedor 1',
      fecha: '2024-10-10',
      total: 2500.00
    },
    {
      proveedor: 'Proveedor 2',
      fecha: '2024-10-11',
      total: 3500.75
    },
    {
      proveedor: 'Proveedor 3',
      fecha: '2024-10-12',
      total: 1000.50
    }
  ];

  constructor(private router: Router) { }

  // Método para regresar a Home
  goBack() {
    this.router.navigate(['/home']);
  }

  // Método para navegar al registro de proveedor (si lo necesitas)
  navigateToRegistroProveedor() {
    this.router.navigate(['/generar-orden']);
  }
}

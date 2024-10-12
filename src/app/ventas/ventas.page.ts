import { Component } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage {

  constructor() { }

  // Acción para registrar una nueva venta
  registrarVenta() {
    // Aquí puedes redirigir a la página de registro de venta o abrir un formulario modal
    console.log('Registrando nueva venta...');
  }

  // Acción para ver el historial de ventas
  verHistorialVentas() {
    // Aquí puedes redirigir a la página de historial de ventas o cargar los datos
    console.log('Viendo historial de ventas...');
  }

}

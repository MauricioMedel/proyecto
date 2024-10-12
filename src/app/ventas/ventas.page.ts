import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router para navegación

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage {

  constructor(private router: Router) { } // Inyecta el Router en el constructor

  // Acción para registrar una nueva venta
  registrarVenta() {
    // Aquí rediriges a la página de registro de ventas
    this.router.navigate(['/registro-ventas']);
    console.log('Redirigiendo a la página de registro de ventas...');
  }

  // Acción para ver el historial de ventas
  verHistorialVentas() {
    // Aquí puedes redirigir a la página de historial de ventas o cargar los datos
    console.log('Viendo historial de ventas...');
  }

  // Función para manejar el clic del botón flotante (FAB)
  navigateToRegistroVentas() {
    // Redirige a la página de registro de ventas
    this.router.navigate(['/registro-ventas']);
  }
}


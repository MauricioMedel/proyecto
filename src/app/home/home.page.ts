import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToVentas() {
    this.router.navigate(['/ventas']);
  }

  goToCompras() {
    this.router.navigate(['/ordenes']);
  }

  goToVentaProducto() {
    this.router.navigate(['/registro-ventas']);
  }

  goToGenerarOrden() {
    this.router.navigate(['/generar-orden']);
  }
}

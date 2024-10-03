import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orden-compra',
  templateUrl: './orden-compra.page.html',
  styleUrls: ['./orden-compra.page.scss'],
})
export class OrdenCompraPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  // Función para navegar a la página de generar nueva orden
  nuevaOrden() {
    this.router.navigate(['/generar-orden']); // Redirige a la página 'generar-orden'
  }

  // Función para navegar al historial de órdenes
  historialOrdenes() {
    this.router.navigate(['/ordenes']); // Redirige a la página 'ordenes'
  }
}

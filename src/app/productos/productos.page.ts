import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(private router: Router) { } // Inyectar Router

  ngOnInit() {}

  registrarProducto() {
    this.router.navigate(['/registro-producto']); // Navega a la página de registro-producto
  }

  verAlmacen() {
    this.router.navigate(['/almacen']); // Navega a la página de almacen
  }
}

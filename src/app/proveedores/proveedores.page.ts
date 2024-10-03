import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para la navegación

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.page.html',
  styleUrls: ['./proveedores.page.scss'],
})
export class ProveedoresPage implements OnInit {

  constructor(private router: Router) { } // Inyecta el servicio Router

  ngOnInit() { }

  // Método para navegar a la página de registro de proveedor
  navigateToRegistrarProveedor() {
    this.router.navigate(['/registro-proveedor']); // Redirige a la página de registro
  }

  // Método para navegar a la página de lista de proveedores
  navigateToListaProveedores() {
    this.router.navigate(['/lista-proveedores']); // Redirige a la página de lista de proveedores
  }
}

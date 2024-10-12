import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Proveedor {
  id: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  calle: string;
  estado: string;
  codigoPostal: string;
  telefono: string;
  showDetails: boolean;
}

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.page.html',
  styleUrls: ['./lista-proveedores.page.scss'],
})
export class ListaProveedoresPage implements OnInit {
  proveedores: Proveedor[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellidoPaterno: 'Pérez',
      apellidoMaterno: 'García',
      calle: 'Calle Principal 123',
      estado: 'Estado 1',
      codigoPostal: '12345',
      telefono: '555-1234',
      showDetails: false
    },
    {
      id: 2,
      nombre: 'María',
      apellidoPaterno: 'López',
      apellidoMaterno: 'Hernández',
      calle: 'Calle Secundaria 456',
      estado: 'Estado 2',
      codigoPostal: '67890',
      telefono: '555-5678',
      showDetails: false
    },
    {
      id: 3,
      nombre: 'Carlos',
      apellidoPaterno: 'Ramírez',
      apellidoMaterno: 'Martínez',
      calle: 'Calle Tercera 789',
      estado: 'Estado 3',
      codigoPostal: '54321',
      telefono: '555-8765',
      showDetails: false
    },
    {
      id: 4,
      nombre: 'Ana',
      apellidoPaterno: 'Torres',
      apellidoMaterno: 'González',
      calle: 'Calle Cuarta 321',
      estado: 'Estado 4',
      codigoPostal: '09876',
      telefono: '555-4321',
      showDetails: false
    },
    {
      id: 5,
      nombre: 'Pedro',
      apellidoPaterno: 'Jiménez',
      apellidoMaterno: 'Sánchez',
      calle: 'Calle Quinta 654',
      estado: 'Estado 5',
      codigoPostal: '11223',
      telefono: '555-6789',
      showDetails: false
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  regresar() {
    this.router.navigate(['/home']);
  }

  navigateToRegistroProveedor() {
    this.router.navigate(['/registro-proveedor']);
  }

  toggleDetails(proveedor: Proveedor) {
    proveedor.showDetails = !proveedor.showDetails; // Alternar la visibilidad
  }
}

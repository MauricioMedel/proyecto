import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.page.html',
  styleUrls: ['./lista-proveedores.page.scss'],
})
export class ListaProveedoresPage implements OnInit {
  proveedores = [
    {
      nombre: 'Juan',
      apellidoPaterno: 'Pérez',
      apellidoMaterno: 'García',
      calle: 'Calle Principal 123',
      estado: 'Estado 1',
      codigoPostal: '12345',
      telefono: '555-1234'
    },
    {
      nombre: 'María',
      apellidoPaterno: 'López',
      apellidoMaterno: 'Hernández',
      calle: 'Calle Secundaria 456',
      estado: 'Estado 2',
      codigoPostal: '67890',
      telefono: '555-5678'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  regresar() {
    this.router.navigate(['/proveedores']);
  }
}

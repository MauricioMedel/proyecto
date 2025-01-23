import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage {
  ventas = [
    {
      folio: '001',
      fecha: '29/11/2024',
      hora: '09:00 AM',
      total: 200.0,
      productos: [
        { nombre: 'Paracetamol 500mg', cantidad: 2, subtotal: 40.0 },
        { nombre: 'Electrolyte', cantidad: 4, subtotal: 120.0 },
        { nombre: 'Suerox', cantidad: 1, subtotal: 40.0 },
      ],
      metodoPago: 'Efectivo',
      vendedor: 'Mauricio Medel de Jesús',
      mostrarDetalle: false,
    },
    {
      folio: '002',
      fecha: '29/11/2024',
      hora: '11:30 AM',
      total: 80.0,
      productos: [
        { nombre: 'Coca Cola 600ml', cantidad: 1, subtotal: 20.0 },
        { nombre: 'Vendas', cantidad: 1, subtotal: 30.0 },
        { nombre: 'Ibuprofeno 400mg', cantidad: 1, subtotal: 30.0 },
      ],
      metodoPago: 'Tarjeta',
      vendedor: 'Mauricio Medel de Jesús',
      mostrarDetalle: false,
    },
    {
      folio: '003',
      fecha: '29/11/2024',
      hora: '03:15 PM',
      total: 185.0,
      productos: [
        { nombre: 'Paquete de pañales (Huggies)', cantidad: 1, subtotal: 150.0 },
        { nombre: 'Jeringas', cantidad: 2, subtotal: 35.0 },
      ],
      metodoPago: 'Transferencia',
      vendedor: 'Mauricio Medel de Jesús',
      mostrarDetalle: false,
    },
    {
      folio: '004',
      fecha: '29/11/2024',
      hora: '06:00 PM',
      total: 295.0,
      productos: [
        { nombre: 'Paracetamol 500mg', cantidad: 1, subtotal: 20.0 },
        { nombre: 'Jarabe para la tos', cantidad: 2, subtotal: 150.0 },
        { nombre: 'Cajas de curitas', cantidad: 1, subtotal: 125.0 },
      ],
      metodoPago: 'Efectivo',
      vendedor: 'Mauricio Medel de Jesús',
      mostrarDetalle: false,
    },
  ];

  constructor(private router: Router) {}

  navigateToRegistroVentas() {
    this.router.navigate(['/registro-ventas']);
  }

  toggleDetalle(venta: any) {
    venta.mostrarDetalle = !venta.mostrarDetalle;
  }
}

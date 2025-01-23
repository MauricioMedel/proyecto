import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    const ctx = document.getElementById('ventasChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Electrolit', 'Protector Solar', 'Nivea', 'Suerox', 'VapoRub', 'XL3 Extra'],
        datasets: [
          {
            label: 'Cantidad Vendida',
            data: [150, 120, 90, 110, 80, 70],
            backgroundColor: [
              '#ff6384',
              '#36a2eb',
              '#cc65fe',
              '#ffce56',
              '#4bc0c0',
              '#9966ff',
            ],
            borderColor: '#000000',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#000000', // Texto negro
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#000000', // Texto negro en eje X
            },
          },
          y: {
            ticks: {
              color: '#000000', // Texto negro en eje Y
            },
            beginAtZero: true,  // Establece el valor mínimo en 0 para el eje Y
          },
        },
      },
    });
  }

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

  goToAlmacen() {
    this.router.navigate(['/almacen']);
  }

  goToClientes() {
    this.router.navigate(['/clientes']);
  }

}

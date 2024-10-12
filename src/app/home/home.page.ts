import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private ordersData: { [key: string]: number[] } = {
    '01': [500, 750, 600, 800], // Datos de enero
    '02': [600, 800, 700, 900], // Datos de febrero
    '03': [450, 300, 650, 500], // Datos de marzo
    '04': [800, 900, 600, 700], // Datos de abril
    '05': [700, 800, 900, 600], // Datos de mayo
    '06': [500, 600, 700, 800], // Datos de junio
    '07': [600, 700, 800, 900], // Datos de julio
    '08': [700, 600, 800, 900], // Datos de agosto
    '09': [800, 900, 600, 700], // Datos de septiembre
    '10': [500, 600, 700, 800], // Datos de octubre
    '11': [600, 800, 900, 700], // Datos de noviembre
    '12': [700, 900, 800, 600], // Datos de diciembre
  };

  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]); // Navega a la página correspondiente
  }

  updateTable(event: any) {
    const selectedMonth: string = event.detail.value; // Especificar tipo de variable
    const tableBody = document.querySelector('#ordersTable tbody');

    if (tableBody) { // Verifica si tableBody no es null
      tableBody.innerHTML = ''; // Limpia la tabla

      const weeklyData: number[] = this.ordersData[selectedMonth] || [];
      weeklyData.forEach((amount: number, index: number) => { // Especificar tipos para los parámetros
        const row = document.createElement('tr');
        row.innerHTML = `
          <td style="border: 1px solid #ccc; padding: 8px;">Semana ${index + 1}</td>
          <td style="border: 1px solid #ccc; padding: 8px;">$${amount}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  }
}

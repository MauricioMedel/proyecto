import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface Cliente {
  id: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  calle: string;
  colonia: string;
  municipio: string;
  estado: string;
  codigoPostal: string;
  rfc: string;
  telefono: string;
  showDetails: boolean;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  // Lista de clientes (puedes llenarlo con datos estáticos o provenientes de una API)
  clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'Carlos',
      apellidoPaterno: 'Martínez',
      apellidoMaterno: 'Gómez',
      calle: 'Av. Juárez 45',
      colonia: 'Centro',
      municipio: 'Chihuahua',
      estado: 'Chihuahua',
      codigoPostal: '31000',
      rfc: 'CARL800101XXXX',
      telefono: '614-1234567',
      showDetails: false
    },
    // Agregar más clientes si lo necesitas...
  ];

  filteredClientes: Cliente[] = [...this.clientes];
  searchText: string = '';

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {}

  // Función para regresar a la página anterior
  regresar() {
    this.router.navigate(['/home']);
  }

  // Función para ir al formulario de registro de cliente
  navigateToRegistroCliente() {
    this.router.navigate(['/registro-clientes']);
  }

  // Función para alternar la visibilidad de los detalles de cada cliente
  toggleDetails(cliente: Cliente) {
    cliente.showDetails = !cliente.showDetails;
  }

  // Función para eliminar un cliente
  async eliminarCliente(cliente: Cliente) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: `¿Estás seguro de que deseas eliminar a ${cliente.nombre}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.clientes = this.clientes.filter(c => c.id !== cliente.id);
            console.log(`Cliente ${cliente.nombre} eliminado.`);
          }
        }
      ]
    });

    await alert.present();
  }

  // Función para actualizar un cliente
  actualizarCliente(cliente: Cliente) {
    this.router.navigate(['/registro-clientes'], {
      queryParams: { id: cliente.id }
    });
  }

  // Función para filtrar los clientes por nombre
  filterClientes() {
    const searchTextLower = this.searchText.toLowerCase();
    this.filteredClientes = this.clientes.filter(cliente =>
      cliente.nombre.toLowerCase().includes(searchTextLower)
    );
  }
}

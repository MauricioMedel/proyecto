import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    // Otros proveedores...
  ];

<<<<<<< HEAD
  constructor(private router: Router, private alertController: AlertController) { }
=======
  filteredProveedores: Proveedor[] = [...this.proveedores];
  searchText: string = '';

  constructor(private router: Router) { }
>>>>>>> 98bef5e9e78aa9a49971f8bc81f2cf2702d1dccc

  ngOnInit() {}

  regresar() {
    this.router.navigate(['/home']);
  }

  navigateToRegistroProveedor() {
    this.router.navigate(['/registro-proveedor']);
  }

  toggleDetails(proveedor: Proveedor) {
    proveedor.showDetails = !proveedor.showDetails;
  }

  async eliminarProveedor(proveedor: Proveedor) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: `¿Estás seguro de que deseas eliminar a ${proveedor.nombre}?`,
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
            this.proveedores = this.proveedores.filter(p => p.id !== proveedor.id);
            console.log(`Proveedor ${proveedor.nombre} eliminado.`);
          }
        }
      ]
    });

    await alert.present();
  }

  actualizarProveedor(proveedor: Proveedor) {
    this.router.navigate(['/registro-proveedor'], {
      queryParams: { id: proveedor.id }
    });
  }

  filterProveedores() {
    const searchTextLower = this.searchText.toLowerCase();
    this.filteredProveedores = this.proveedores.filter(proveedor =>
      proveedor.nombre.toLowerCase().includes(searchTextLower)
    );
  }

}

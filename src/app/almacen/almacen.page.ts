import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.page.html',
  styleUrls: ['./almacen.page.scss'],
})
export class AlmacenPage {
  // Definición de la propiedad productos
  productos = [
    { nombre: 'Paracetamol', categoria: 'Medicamento', precio: 100, stock: 50, descripcion: 'Alivia el dolor y reduce la fiebre.', mostrandoDetalles: false },
    { nombre: 'Ibuprofeno', categoria: 'Medicamento', precio: 150, stock: 40, descripcion: 'Utilizado comúnmente para reducir la inflamación.', mostrandoDetalles: false },
    // Añade más productos según sea necesario
  ];

  // Inyecta NavController en el constructor
  constructor(private navCtrl: NavController) {}

  // Agrega esta función para manejar el clic en el botón flotante
  navigateToAgregarProducto() {
    this.navCtrl.navigateForward('/registro-producto');
  }

  // Método para regresar a la página de productos
  regresar() {
    this.navCtrl.navigateBack('/home');
  }

  // Método para alternar la visualización de detalles del producto
  toggleDetalles(index: number) {
    this.productos[index].mostrandoDetalles = !this.productos[index].mostrandoDetalles;
  }
}

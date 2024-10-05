import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.page.html',
  styleUrls: ['./almacen.page.scss'],
})
export class AlmacenPage {
  // Definición de la propiedad productos
  productos = [
    { nombre: 'Paracetamol', categoria: 'Medicamento', precio: 100, stock: 50, descripcion: 'Alivia el dolor y reduce la fiebre.' },
    { nombre: 'Ibuprofeno', categoria: 'Medicamento', precio: 150, stock: 40, descripcion: 'Utilizado comúnmente para reducir la inflamación.' },
    // Añade más productos según sea necesario
  ];

  // Inyecta NavController en el constructor
  constructor(private navCtrl: NavController) { }

  // Método para regresar a la página de productos
  regresar() {
    this.navCtrl.navigateBack('/productos'); // Utiliza navigateBack para regresar a la página de productos
  }
}

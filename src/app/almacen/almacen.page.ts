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
      
  // Agrega esta función para manejar el clic en el botón flotante
  navigateToAgregarProducto() {
    // Aquí puedes definir la lógica para navegar a la página de agregar productos
    // Por ejemplo, usando NavController si estás navegando a otra página
    this.navCtrl.navigateForward('/registro-producto');
  }

  // Método para regresar a la página de productos
  regresar() {
    this.navCtrl.navigateBack('/home'); // Utiliza navigateBack para regresar a la página de productos
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-ventas',
  templateUrl: './registro-ventas.page.html',
  styleUrls: ['./registro-ventas.page.scss'],
})
export class RegistroVentasPage implements OnInit {

  nombreProducto: string = '';
  cantidad: number | null = null;
  precioVenta: number | null = null;
  fechaCompra: string = '';
  productos: any[] = [];
  productosEncontrados: any[] = [];
  total: number = 0;
  
  // Simulación de productos disponibles en el sistema
  listaProductos = [
    { nombre: 'Producto A', precio: 100 },
    { nombre: 'Producto B', precio: 150 },
    { nombre: 'Producto C', precio: 200 },
    { nombre: 'Producto D', precio: 120 },
    { nombre: 'Producto E', precio: 180 },
    // Agrega más productos según sea necesario
  ];

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  // Función que filtra los productos en base al texto ingresado
  buscarProducto() {
    if (this.nombreProducto.trim() === '') {
      this.productosEncontrados = [];
      return;
    }

    this.productosEncontrados = this.listaProductos.filter(producto =>
      producto.nombre.toLowerCase().includes(this.nombreProducto.toLowerCase())
    );
  }

  // Función para seleccionar un producto de la lista encontrada
  seleccionarProducto(producto: any) {
    this.nombreProducto = producto.nombre;
    this.precioVenta = producto.precio;
    this.fechaCompra = new Date().toLocaleDateString(); // Asigna la fecha actual
    this.productosEncontrados = []; // Limpiar la lista de búsqueda
  }

  agregarProducto() {
    if (this.nombreProducto && this.cantidad != null && this.cantidad > 0 && this.precioVenta != null && this.precioVenta > 0) {
      const subtotal = this.cantidad * this.precioVenta;
      this.productos.push({
        nombre: this.nombreProducto,
        cantidad: this.cantidad,
        precioVenta: this.precioVenta,
        fechaCompra: this.fechaCompra,
        subtotal: subtotal
      });
      this.calcularTotal();
      this.limpiarCampos();
    } else {
      this.mostrarAlerta('Error', 'Por favor, ingresa todos los campos correctamente.');
    }
  }

  calcularTotal() {
    this.total = this.productos.reduce((acc, producto) => acc + producto.subtotal, 0);
  }

  limpiarCampos() {
    this.nombreProducto = '';
    this.cantidad = null;
    this.precioVenta = null;
    this.fechaCompra = '';
  }

  async registrarVenta() {
    if (this.productos.length === 0) {
      await this.mostrarAlerta('Error', 'No hay productos en la venta.');
      return;
    }

    const alert = await this.alertController.create({
      header: 'Venta registrada',
      message: `Venta registrada correctamente. Total: ${this.total}`,
      buttons: ['OK']
    });

    await alert.present();
    this.limpiarFormulario();
    this.router.navigate(['/ventas']);
  }

  async cancelRegistration() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Seguro que quieres cancelar?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Sí',
          handler: () => {
            this.limpiarFormulario();
            this.router.navigate(['/ventas']);
          }
        }
      ]
    });

    await alert.present();
  }

  limpiarFormulario() {
    this.nombreProducto = '';
    this.cantidad = null;
    this.precioVenta = null;
    this.fechaCompra = '';
    this.productos = [];
    this.total = 0;
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}

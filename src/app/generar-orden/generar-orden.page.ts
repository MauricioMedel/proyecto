import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-generar-orden',
  templateUrl: './generar-orden.page.html',
  styleUrls: ['./generar-orden.page.scss'],
})
export class GenerarOrdenPage implements OnInit {

  // Propiedades
  fechaCreacion: string = '';
  descripcion: string = '';
  cantidad: number | null = null;
  precio: number | null = null;
  productos: { descripcion: string; cantidad: number; precio: number, subtotal: number }[] = [];

  total: number = 0;
  iva: number = 0;
  totalConIva: number = 0;

  proveedores: string[] = ['Laboratorios Solfran S.A.', 'Proveedor B', 'Proveedor C'];
  proveedor: string = '';  // Agregada la propiedad proveedor

  // Datos del empleado y cliente
  empleado: string = 'Mauricio Medel de Jesús';
  cliente: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    this.fechaCreacion = todayString;
  }

  // Método para agregar un producto
  agregarProducto() {
    if (this.descripcion && this.cantidad && this.precio) {
      const subtotal = this.cantidad * this.precio;
      this.productos.push({
        descripcion: this.descripcion,
        cantidad: this.cantidad,
        precio: this.precio,
        subtotal: subtotal
      });
      this.calcularTotal();
      this.limpiarCamposProducto();
    } else {
      this.mostrarAlerta('Error', 'Todos los campos deben estar llenos para agregar un producto.');
    }
  }

  // Método para eliminar un producto
  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
    this.calcularTotal();
  }

  // Método para calcular el total
  calcularTotal() {
    this.total = this.productos.reduce((acc, producto) => acc + producto.subtotal, 0);
    this.iva = this.total * 0.16; // 16% IVA
    this.totalConIva = this.total + this.iva;
  }

  // Verifica si se puede registrar la orden
  puedeRegistrar() {
    return this.productos.length > 0 && this.cliente !== '';
  }

  // Método para registrar la orden
  async registrarOrden() {
    if (this.puedeRegistrar()) {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Orden registrada correctamente.',
        buttons: ['OK']
      });
      await alert.present();
      this.limpiarFormulario();
      this.router.navigate(['/ordenes']);
    } else {
      this.mostrarAlerta('Error', 'Agrega al menos un producto y un cliente para registrar la orden.');
    }
  }

  // Método para cancelar la orden
  async cancelOrder() {
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
            this.router.navigate(['/ordenes']);
          }
        }
      ]
    });

    await alert.present();
  }

  // Limpia los campos del producto
  limpiarCamposProducto() {
    this.descripcion = '';
    this.cantidad = null;
    this.precio = null;
  }

  // Limpia el formulario completo
  limpiarFormulario() {
    this.limpiarCamposProducto();
    this.productos = [];
    this.total = 0;
    this.iva = 0;
    this.totalConIva = 0;
  }

  // Muestra una alerta
  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}

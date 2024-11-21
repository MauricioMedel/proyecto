import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-generar-orden',
  templateUrl: './generar-orden.page.html',
  styleUrls: ['./generar-orden.page.scss'],
})
export class GenerarOrdenPage implements OnInit {

  fechaCreacion: string = '';
  descripcion: string = '';
  cantidad: number | null = null;
  precio: number | null = null;
  productos: { descripcion: string; cantidad: number; precio: number }[] = [];

  fechaMinima: string = '';
  fechaMaxima: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    this.fechaCreacion = todayString;
    this.fechaMinima = todayString;
    this.fechaMaxima = todayString;
  }

  agregarProducto() {
    if (this.descripcion && this.cantidad && this.precio) {
      this.productos.push({
        descripcion: this.descripcion,
        cantidad: this.cantidad,
        precio: this.precio,
      });
      this.limpiarCamposProducto();
    } else {
      this.mostrarAlerta('Error', 'Todos los campos deben estar llenos para agregar un producto.');
    }
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
  }

  puedeRegistrar() {
    return this.productos.length > 0;
  }

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
      this.mostrarAlerta('Error', 'Agrega al menos un producto para registrar la orden.');
    }
  }

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

  limpiarCamposProducto() {
    this.descripcion = '';
    this.cantidad = null;
    this.precio = null;
  }

  limpiarFormulario() {
    this.limpiarCamposProducto();
    this.productos = [];
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

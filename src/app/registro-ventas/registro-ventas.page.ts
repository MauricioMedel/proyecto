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
  precioCompra: number | null = null;
  precioVenta: number | null = null;
  formSubmitted: boolean = false;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

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

  async registrarProducto() {
    this.formSubmitted = true;
    if (!this.validarFormulario()) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos obligatorios.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Registro de producto realizado correctamente.',
      buttons: ['OK']
    });

    await alert.present();
    this.limpiarFormulario();
    this.router.navigate(['/ventas']);
  }

  limpiarFormulario() {
    this.nombreProducto = '';
    this.cantidad = null;
    this.precioCompra = null;
    this.precioVenta = null;
    this.formSubmitted = false;
  }

  validarFormulario() {
    return this.nombreProducto && this.cantidad !== null &&
      this.precioCompra !== null && this.precioVenta !== null;
  }
}

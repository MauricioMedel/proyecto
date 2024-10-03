import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-generar-orden',
  templateUrl: './generar-orden.page.html',
  styleUrls: ['./generar-orden.page.scss'],
})
export class GenerarOrdenPage implements OnInit {

  nombre: string = '';
  descripcion: string = '';
  unidad: string = '';
  precio: number | null = null;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  async registrarOrden() {
    // Aquí podrías agregar validación si es necesario
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Orden registrada correctamente.',
      buttons: ['OK']
    });

    await alert.present();
    this.limpiarFormulario();
    this.router.navigate(['/orden-compra']);
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
            this.router.navigate(['/orden-compra']);
          }
        }
      ]
    });

    await alert.present();
  }

  limpiarFormulario() {
    this.nombre = '';
    this.descripcion = '';
    this.unidad = '';
    this.precio = null;
  }
}

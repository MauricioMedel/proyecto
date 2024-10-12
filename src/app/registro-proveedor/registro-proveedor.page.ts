import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-proveedor',
  templateUrl: './registro-proveedor.page.html',
  styleUrls: ['./registro-proveedor.page.scss'],
})
export class RegistroProveedorPage implements OnInit {

  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  calle: string = '';
  municipio: string = '';
  estado: string = '';
  codigoPostal: string = '';
  numeroTelefono: string = '';
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
            this.router.navigate(['/lista-proveedores']);
          }
        }
      ]
    });

    await alert.present();
  }

  async registrarProveedor() {
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
      message: 'Registro realizado correctamente.',
      buttons: ['OK']
    });

    await alert.present();
    this.limpiarFormulario();
    this.router.navigate(['/proveedores']);
  }

  limpiarFormulario() {
    this.nombre = '';
    this.apellidoPaterno = '';
    this.apellidoMaterno = '';
    this.calle = '';
    this.municipio = '';
    this.estado = '';
    this.codigoPostal = '';
    this.numeroTelefono = '';
    this.formSubmitted = false;
  }

  validarFormulario() {
    return this.nombre && this.apellidoPaterno && this.apellidoMaterno &&
           this.calle && this.municipio && this.estado &&
           this.codigoPostal && this.numeroTelefono;
  }
}

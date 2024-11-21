import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-proveedor',
  templateUrl: './registro-proveedor.page.html',
  styleUrls: ['./registro-proveedor.page.scss'],
})
export class RegistroProveedorPage implements OnInit {

  nombres: string = '';
  apellidos: string = '';
  rfc: string = '';
  telefono: string = '';
  email: string = '';
  calle: string = '';
  colonia: string = '';
  codigoPostal: string = '';
  municipio: string = '';
  estado: string = '';
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
    this.router.navigate(['/lista-proveedores']);
  }

  limpiarFormulario() {
    this.nombres = '';
    this.apellidos = '';
    this.rfc = '';
    this.telefono = '';
    this.email = '';
    this.calle = '';
    this.colonia = '';
    this.codigoPostal = '';
    this.municipio = '';
    this.estado = '';
    this.formSubmitted = false;
  }

  validarFormulario() {
    return this.nombres && this.apellidos && this.rfc &&
           this.telefono && this.email && this.calle &&
           this.colonia && this.codigoPostal && this.municipio && this.estado;
  }
}

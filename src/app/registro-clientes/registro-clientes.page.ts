import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-clientes.page.html',
  styleUrls: ['./registro-clientes.page.scss'],
})
export class RegistroClientesPage implements OnInit {

  nombreCliente: string = '';
  apellidoPaternoCliente: string = '';
  apellidoMaternoCliente: string = '';
  rfc: string = '';
  direccionCliente: string = '';
  ciudadCliente: string = '';
  estadoCliente: string = '';
  codigoPostalCliente: string = '';
  telefonoCliente: string = '';
  emailCliente: string = '';
  formSubmitted: boolean = false;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  async cancelRegistration() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Seguro que quieres cancelar el registro?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Sí',
          handler: () => {
            this.limpiarFormulario();
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }

  async registrarCliente() {
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
      message: 'Registro de cliente realizado correctamente.',
      buttons: ['OK']
    });

    await alert.present();
    this.limpiarFormulario();
    this.router.navigate(['/home']);
  }

  limpiarFormulario() {
    this.nombreCliente = '';
    this.apellidoPaternoCliente = '';
    this.apellidoMaternoCliente = '';
    this.rfc = '';
    this.direccionCliente = '';
    this.ciudadCliente = '';
    this.estadoCliente = '';
    this.codigoPostalCliente = '';
    this.telefonoCliente = '';
    this.emailCliente = '';
    this.formSubmitted = false;
  }

  validarFormulario() {
    return this.nombreCliente && this.apellidoPaternoCliente && this.apellidoMaternoCliente &&
           this.rfc && this.direccionCliente && this.ciudadCliente && this.estadoCliente &&
           this.codigoPostalCliente && this.telefonoCliente && this.emailCliente;
  }
}

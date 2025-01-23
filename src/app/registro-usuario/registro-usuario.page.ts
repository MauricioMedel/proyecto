import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Necesario para navegar
import { ToastController, AlertController } from '@ionic/angular'; // Importamos Toast y Alert

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {

  // Variables para los campos del formulario
  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  email: string = '';
  usuario: string = '';
  password: string = '';
  domicilio: string = ''; // Se agregó esta propiedad para evitar el error

  constructor(
    private router: Router,
    private toastController: ToastController, // Inyectamos el controlador de toast
    private alertController: AlertController // Inyectamos el controlador de alert
  ) { }

  ngOnInit() {}

  // Método para registrar el usuario
  async registrarUsuario() {
    // Verificar que todos los campos están completos
    if (this.nombre && this.apellidoPaterno && this.email && this.usuario && this.password && this.domicilio) {
      console.log('Usuario registrado:', this.nombre, this.apellidoPaterno, this.email, this.domicilio);

      // Mostrar el toast con el mensaje de "Usuario registrado"
      const toast = await this.toastController.create({
        message: 'Usuario registrado correctamente',
        duration: 2000, // Duración de 2 segundos
        position: 'top' // Ubicación del toast en la pantalla
      });
      await toast.present();

      // Esperar 2 segundos antes de redirigir
      setTimeout(() => {
        // Limpiar los campos
        this.limpiarCampos();
        
        // Redirigir a la página de login
        this.router.navigate(['/login']);
      }, 2000);
    } else {
      // Mostrar el toast de error si los campos no están completos
      const toast = await this.toastController.create({
        message: 'Por favor, complete todos los campos',
        duration: 2000,
        color: 'danger', // Color rojo para indicar error
        position: 'top'
      });
      await toast.present();
    }
  }

  // Método para cancelar el registro
  async cancelRegistration() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Seguro que quieres cancelar?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelación cancelada');
          }
        },
        {
          text: 'Sí',
          handler: () => {
            // Limpiar los campos
            this.limpiarCampos();
            
            // Redirigir a la página de login
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }

  // Método para limpiar los campos del formulario
  limpiarCampos() {
    this.nombre = '';
    this.apellidoPaterno = '';
    this.apellidoMaterno = '';
    this.email = '';
    this.usuario = '';
    this.password = '';
    this.domicilio = ''; // Limpieza del nuevo campo domicilio
  }
}

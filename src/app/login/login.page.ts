import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';  // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ''; // Campo para el nombre de usuario
  password: string = ''; // Campo para la contraseña
  passwordType: string = 'password'; // Tipo inicial de la contraseña (oculta)

  constructor(
    private router: Router, // Servicio de navegación para redirigir al dashboard
    private alertController: AlertController, // Servicio para mostrar alertas
    private authService: AuthService // Servicio de autenticación
  ) { }

  ngOnInit() { }

  // Método para manejar el envío del formulario de inicio de sesión
  async onSubmit() {
    const credentials = { email: this.username, password: this.password };
    
    // Llamada al servicio de autenticación para hacer login
    this.authService.login(credentials).subscribe({
      next: async (response) => {
        if (response && response.token) {
          // Si la respuesta es correcta, redirigir a la página principal
          this.router.navigate(['/home']);
        } else {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Usuario o contraseña incorrectos',
            buttons: ['OK'],
          });
          await alert.present(); // Mostrar la alerta
        }
      },
      error: async (err) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Hubo un problema al intentar iniciar sesión',
          buttons: ['OK'],
        });
        await alert.present(); // Mostrar la alerta de error
      }
    });
  }

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility(event: any) {
    this.passwordType = event.detail.checked ? 'text' : 'password';
  }

  // Método para redirigir a la página de registro de usuario
  goToRegister() {
    this.router.navigate(['/registro-usuario']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ''; // Campo para el nombre de usuario
  password: string = ''; // Campo para la contraseña
  passwordType: string = 'password'; // Tipo inicial de la contraseña

  constructor(
    private router: Router, // Servicio de navegación para redirigir al dashboard
    private alertController: AlertController // Servicio para mostrar alertas
  ) { }

  ngOnInit() { }

  // Método para manejar el envío del formulario de inicio de sesión
  async onSubmit() {
    // Simulación de verificación de credenciales (aquí puedes conectar a un servicio backend real)
    if (this.username === 'admin' && this.password === 'admin123') {
      this.router.navigate(['/home']); // Redirigir a la página de inicio o home
    } else {
      // Si las credenciales son incorrectas, mostrar una alerta
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK'],
      });
      await alert.present(); // Mostrar la alerta
    }
  }

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}

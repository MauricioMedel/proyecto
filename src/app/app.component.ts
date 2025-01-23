import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; // Importamos MenuController y NavController

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController, private navCtrl: NavController) {}

  closeMenu() {
    this.menu.close(); // Método para cerrar el menú
  }

  // Método para cerrar sesión
  logout() {
    // Cierra el menú primero
    this.menu.close();

    // Redirige al login
    this.navCtrl.navigateRoot('/login');
  }
}

import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular'; // Importa MenuController

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController) {} // Inyecta MenuController

  closeMenu() {
    this.menu.close(); // Método para cerrar el menú
  }
}

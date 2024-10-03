import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.page.html',
  styleUrls: ['./ordenes.page.scss'],
})
export class OrdenesPage {

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/orden-compra']);
  }
}

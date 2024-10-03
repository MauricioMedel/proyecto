import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaProveedoresPage } from './lista-proveedores.page';

describe('ListaProveedoresPage', () => {
  let component: ListaProveedoresPage;
  let fixture: ComponentFixture<ListaProveedoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProveedoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

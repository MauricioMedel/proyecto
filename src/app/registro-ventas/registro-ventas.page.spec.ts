import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroVentasPage } from './registro-ventas.page';

describe('RegistroVentasPage', () => {
  let component: RegistroVentasPage;
  let fixture: ComponentFixture<RegistroVentasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVentasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdenCompraPage } from './orden-compra.page';

describe('OrdenCompraPage', () => {
  let component: OrdenCompraPage;
  let fixture: ComponentFixture<OrdenCompraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

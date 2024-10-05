import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'proveedores',
    loadChildren: () => import('./proveedores/proveedores.module').then(m => m.ProveedoresPageModule)
  },
  {
    path: 'orden-compra', // Ruta para la página de Orden de Compra
    loadChildren: () => import('./orden-compra/orden-compra.module').then(m => m.OrdenCompraPageModule)
  },
  {
    path: 'productos', // Ruta para la página de Productos
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosPageModule)
  },
  {
    path: 'registro-proveedor', // Ruta para la página de Registro de Proveedor
    loadChildren: () => import('./registro-proveedor/registro-proveedor.module').then(m => m.RegistroProveedorPageModule)
  },
  {
    path: 'lista-proveedores', // Ruta para la página de Lista de Proveedores
    loadChildren: () => import('./lista-proveedores/lista-proveedores.module').then(m => m.ListaProveedoresPageModule)
  },
  {
    path: 'generar-orden', // Ruta para la página de Generar Orden
    loadChildren: () => import('./generar-orden/generar-orden.module').then(m => m.GenerarOrdenPageModule)
  },
  {
    path: 'ordenes', // Ruta para la página de Historial de Órdenes
    loadChildren: () => import('./ordenes/ordenes.module').then(m => m.OrdenesPageModule)
  },
  {
    path: 'almacen',
    loadChildren: () => import('./almacen/almacen.module').then( m => m.AlmacenPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

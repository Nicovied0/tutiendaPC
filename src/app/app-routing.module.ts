import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './producto/producto.component';
import { ProfileComponent } from './profile/profile.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EnvioComponent } from './envio/envio.component'
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'perfil/administrador', component: PanelAdminComponent },
  { path: 'perfil/administrador/producto/:id', component: EditProductComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'formasDeEnvio', component: EnvioComponent },
  { path: 'carrito', component: CarritoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

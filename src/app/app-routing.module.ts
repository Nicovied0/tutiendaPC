import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './producto/producto.component';
import { ProfileComponent } from './profile/profile.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EnvioComponent } from './envio/envio.component'
import { CarritoComponent } from './carrito/carrito.component';
import { LoginGuardian } from './Servicios/loginGuardian.service';
import { AyudaComponent } from './ayuda/ayuda.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'perfil/administrador', component: PanelAdminComponent, canActivate: [LoginGuardian] },
  { path: 'perfil/administrador/producto/:id', component: EditProductComponent, canActivate: [LoginGuardian] },
  { path: 'formasDeEnvio', component: EnvioComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'sponsors', component: SponsorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

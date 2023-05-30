import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './producto/producto.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SerchBarComponent } from './serch-bar/serch-bar.component';
import { EnDesarrolloComponent } from './en-desarrollo/en-desarrollo.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { LoaderComponent } from './loader/loader.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CarritoComponent,
    ProductosComponent,
    ProductoComponent,
    CarruselComponent,
    FooterComponent,
    FormularioComponent,
    SerchBarComponent,
    EnDesarrolloComponent,
    PanelAdminComponent,
    LoaderComponent,
    ProfileComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

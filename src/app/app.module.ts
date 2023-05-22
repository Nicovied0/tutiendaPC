import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { CarruselProductosComponent } from './carrusel-productos/carrusel-productos.component';
import { SerchBarComponent } from './serch-bar/serch-bar.component';
import { EnDesarrolloComponent } from './en-desarrollo/en-desarrollo.component';

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
    CarruselProductosComponent,
    SerchBarComponent,
    EnDesarrolloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

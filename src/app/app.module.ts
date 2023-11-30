import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppComponent } from './app.component';

import { LoginService } from './Servicios/login.service';
import { ProductosEditService } from './Servicios/productsEdit.service'
import { SearchService } from './Servicios/search.service';
import { LoginGuardian } from './Servicios/loginGuardian.service';


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
import { ProductsEditComponent } from './editProduct/products-edit.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OfertComponent } from './ofert/ofert.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EnvioComponent } from './envio/envio.component';
import { AddProductsComponent } from './add-products/add-products.component';
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
    ProductsEditComponent,
    EditProductComponent,
    OfertComponent,
    CategoriasComponent,
    EnvioComponent,
    AddProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    FormsModule,
    CarouselModule.forRoot(),
  ],
  providers: [LoginService, SearchService, LoginGuardian, ProductosEditService],
  bootstrap: [AppComponent]
})
export class AppModule { }

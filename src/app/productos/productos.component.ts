import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  public productos = [
    {
      imagen: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21233_Mouse_Glorious_Model_D_Minus_-_Matte_Black_ad043ce3-grn.jpg',
      nombre: 'Nombre del Producto 1',
      categoria: 'Categoría del Producto 1',
      detalles: 'Detalles del Producto 1',
      precio: 10.99,
    },
    {
      imagen: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21233_Mouse_Glorious_Model_D_Minus_-_Matte_Black_ad043ce3-grn.jpg',
      nombre: 'Nombre del Producto 2',
      categoria: 'Categoría del Producto 2',
      detalles: 'Detalles del Producto 2',
      precio: 19.99,
    },]
}

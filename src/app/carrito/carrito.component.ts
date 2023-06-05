import { Component } from '@angular/core';
import { ProductosService } from '../productos/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos: any[] = [];
  public loading = false;
  public carritoVacio: boolean = true

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productos = this.productosService.getProductoCarrito();
    console.log(this.productos)
    this.loading = true;
    if (this.productos.length === 0) {
      this.carritoVacio = true
    } else {
      this.carritoVacio = false
    }
    console.log("carrito vacio", this.carritoVacio)
  }

}

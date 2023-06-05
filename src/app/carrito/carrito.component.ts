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
  public precioTotal: number = 0

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

    this.sumar()
    console.log("carrito vacio", this.carritoVacio)
  }

  sumar() {
    this.precioTotal = this.productos.reduce((total, producto) => {
      return total + Number(producto.precio);
    }, 0);
    console.log(this.precioTotal);
  }
  comprar() {
    
  }


}

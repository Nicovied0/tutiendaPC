import { Component } from '@angular/core';
import { ProductosService } from '../Servicios/productos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PayService } from '../Servicios/pay.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos: any[] = [];
  public loading = false;
  public carritoVacio: boolean = true;
  public precioTotal: number = 0;

  constructor(private productosService: ProductosService, private router: Router, private payService: PayService) { }

  ngOnInit() {

    this.productos = this.productosService.getProductoCarrito();
    this.productos.forEach(producto => {
      producto.cantidad = 1;
    });
    this.loading = true;
    if (this.productos.length === 0) {
      this.carritoVacio = true;
    } else {
      this.carritoVacio = false;
    }
    this.calcularPrecioTotal();

  }

  async comprar(precioTotal: any) {
    const total = this.precioTotal
    const nombre = "Productos varios"
    try {
      const resultadoCompra = await this.payService.createOrder(total, nombre);
      const init_point = resultadoCompra.init_point;
      this.goMercadoPago(init_point);
    } catch (error) {
      console.error('Error al crear el pedido:', error);
    }
  }

  goMercadoPago(init_point: any) {
    window.location.href = init_point;
  }

  goProductos() {
    this.router.navigate(['/productos']);
  }

  restarCantidad(producto: any) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
      this.calcularPrecioTotal();
    }
  }

  sumarCantidad(producto: any) {
    producto.cantidad++;
    this.calcularPrecioTotal();
  }

  calcularPrecioTotal() {
    this.precioTotal = this.productos.reduce((total, producto) => {
      return total + (producto.precio * (producto.cantidad || 1));
    }, 0);
  }

  deleteProductCarrito(id: any) {
    this.productosService.deleteProductoCarrito(id)
    window.location.reload()
  }



}

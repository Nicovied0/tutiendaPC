import { Component } from '@angular/core';
import { ProductosService } from '../Servicios/productos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  constructor(private productosService: ProductosService, private router: Router,) { }

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
    console.log("carrito vacio", this.carritoVacio);

  }

  comprar() {
    const total = this.precioTotal
    console.log(total, "soy ese")
    Swal.fire({
      title: 'Estas seguro de confirmar la compra?',
      text: `El monto es de  $${total}.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, cancelar compra!',
      confirmButtonText: 'Si, Comprar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Pago realizado!',
          `Valor total del monto $${total}.`,
          'success'
        )
      }
    })
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

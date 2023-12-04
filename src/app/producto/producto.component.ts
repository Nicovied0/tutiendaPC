import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../Servicios/productos.service';
import { Router } from '@angular/router';
import { PayService } from '../Servicios/pay.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() producto: any;

  public productoId: any;
  public loading = false;
  public carrito: any[] = [];
  public carritoAgregado = false;

  constructor(private route: ActivatedRoute, private productosService: ProductosService, private router: Router, private payService: PayService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.getProductById(productId);
      }
    });
    this.filterLocalStorage();
  }

  getProductById(id: string) {
    this.productosService.getProductoById(id)
      .then(producto => {
        this.productoId = producto;
        this.loading = true;
        this.checkCarrito();
      })
      .catch(error => {
        console.error(error);
      });
  }

  agregarAlCarrito() {
    const carritoActual = localStorage.getItem('carrito');
    if (carritoActual) {
      this.carrito = JSON.parse(carritoActual);
      window.location.reload()
    }
    const existeProducto = this.carrito.find(producto => producto.id === this.productoId.id);
    if (!existeProducto) {
      this.carrito.push(this.productoId);
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
      this.carritoAgregado = true;
    }
  }

  filterLocalStorage() {
    const carritoActual = localStorage.getItem('carrito');
    if (carritoActual) {
      this.carrito = JSON.parse(carritoActual);
    }
    this.checkCarrito();
  }

  checkCarrito() {
    const existeProducto = this.carrito.find(producto => producto.id === this.productoId.id);
    if (existeProducto) {
      this.carritoAgregado = true;
    }
  }

  goCarrito() {
    this.router.navigate(['/carrito']);
  }

  goMercadoPago(init_point: any) {
    window.location.href = init_point;
  }

  async comprar(precio: any, nombre: string) {
    const precioNumerico = parseFloat(precio);
    try {
      const resultadoCompra = await this.payService.createOrder(precioNumerico, nombre);
      console.log('Pedido creado:', resultadoCompra);
      const init_point = resultadoCompra.init_point;
      console.log(init_point);
      this.goMercadoPago(init_point);
    } catch (error) {
      console.error('Error al crear el pedido:', error);
    }
  }


}


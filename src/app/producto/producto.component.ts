import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos/productos.service';
import { Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private productosService: ProductosService, private router: Router) { }

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
        console.log(producto);
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
}

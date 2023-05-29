import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() producto: any;

  public productoId: any
  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.getProductById(productId);
      }
    })
  }

  getProductById(id: string) {
    this.productosService.getProductoById(id)
      .then(producto => {
        // Aquí puedes hacer lo que necesites con los detalles del producto
        console.log(producto);
        this.productoId = producto
      })
      .catch(error => {
        // Manejo de errores
        console.error(error);
      });
  }
}

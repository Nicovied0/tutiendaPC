import { Component } from '@angular/core';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(private productosService: ProductosService) { }

  productos: any = []


  ngOnInit() {
    this.productosService.getProductos().then((results) => {
      this.productos = results
      console.log(this.productos)
    }).catch((error) => {
      console.error('Error al obtener los repositorios', error);
    })
  }

  onChangeOrder(event: any) {
    const value = event.target.value;
    this.order(value);
  }


  order(value: string) {
    if (value === 'menor') {
      return (this.productos.sort((a: any, b: any) => a.precio - b.precio));
    } else if ((value === 'mayor')) {
      return (this.productos.sort((a: any, b: any) => b.precio - a.precio));
    }
  }


}

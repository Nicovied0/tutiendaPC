import { Component } from '@angular/core';
import { ProductosService } from '../Servicios/productos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent {
  constructor(private productosService: ProductosService, private router: Router) { }
  public loading = false
  productos: any = []
  hover: boolean = false;
  hoverIndex: number = -1;
  public disponible: boolean = false

  ngOnInit() {
    this.productosService.getProductos().then((results) => {
      this.productos = results
      console.log(this.productos)
      this.loading = true


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


  verDetalle(id: number) {
    console.log(id)
    this.router.navigate(['/producto', id]);
  }



  onMouseEnter(index: number) {
    this.hoverIndex = index;
  }

  onMouseLeave(index: number) {
    this.hoverIndex = -1;
  }

}

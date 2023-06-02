import { Component } from '@angular/core';
import { ProductosService } from '../productos/productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ofert',
  templateUrl: './ofert.component.html',
  styleUrls: ['./ofert.component.css']
})
export class OfertComponent {
  productos: any[] = [];
  productos2: any[] = []


  constructor(private productosService: ProductosService, private router: Router) { }

  ngOnInit() {
    this.productosService
      .getOferta()
      .then((results) => {
        this.productos = results;
        this.productos2 = [...this.productos].reverse();
        this.productos.pop();
        console.log(this.productos2);
        console.log(this.productos);
      })
      .catch((error) => {
        console.error('Error al obtener los productos', error);
      });
  }

  goProducto(index: number) {
    console.log(this.productos)
    console.log("soy yo")
    console.log(index)
    this.router.navigate(['/producto', index]);
  }

}

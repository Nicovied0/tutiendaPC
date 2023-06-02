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
  productosGrouped: any[] = [];
  carouselStyles: { [key: string]: string } = {};

  constructor(private productosService: ProductosService, private router: Router) { }

  ngOnInit() {
    this.productosService.getOferta().then((results) => {
      this.productos = results;
      this.productosGrouped = this.createCircularGroups(this.productos, 4);
      console.log(this.productos);
    }).catch((error) => {
      console.error('Error al obtener los productos', error);
    });
  }

  createCircularGroups(products: any[], groupSize: number): any[] {
    const groups: any[] = [];
    const totalGroups = Math.ceil(products.length / groupSize);
    const lastGroup = products.slice(products.length - groupSize);

    for (let i = 0; i < totalGroups; i++) {
      const startIndex = i * groupSize;
      let group: any[] = [];

      if (i === totalGroups - 1) {
        group = [...lastGroup, ...products.slice(0, groupSize - lastGroup.length)];
      } else {
        group = products.slice(startIndex, startIndex + groupSize);
      }

      groups.push(group);
    }

    return groups;
  }
}

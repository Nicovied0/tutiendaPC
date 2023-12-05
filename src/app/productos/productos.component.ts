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
  productosFiltrados = false
  hover: boolean = false;
  hoverIndex: number = -1;
  public disponible: boolean = false

  ngOnInit() {
    this.productosService.getProductos().then((results) => {
      this.productos = results
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
    this.router.navigate(['/producto', id]);
  }



  onMouseEnter(index: number) {
    this.hoverIndex = index;
  }

  onMouseLeave(index: number) {
    this.hoverIndex = -1;
  }

  selectedFilter: string = ''; 

  onFilterChange(filter: string) {
    this.selectedFilter = filter; 
  }
  
  applyFilter() {
    if (this.selectedFilter === 'menor') {
      return this.productos.slice().sort((a: any, b: any) => a.precio - b.precio);
    } else if (this.selectedFilter === 'mayor') {
      return this.productos.slice().sort((a: any, b: any) => b.precio - a.precio);
    } else if (this.selectedFilter) {
      const filter = this.productos.filter((producto: any) => producto.type === this.selectedFilter);
      if(filter.length){
        this.productosFiltrados = true
      }else{
        this.productosFiltrados = false
      }
      return filter
    } else {
      return this.productos;
    }
  }
}

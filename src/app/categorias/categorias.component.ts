import { Component } from '@angular/core';

import { ProductosService } from '../Servicios/productos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  constructor(private productosService: ProductosService, private router: Router) { }
  public productos: any = []
  public carga = false
  public categoriaActual: string | null = null
  hover: boolean = false;
  hoverIndex: number = -1;


  async getMemorias() {
    console.log('ejecute menorias')
    this.productos = await this.productosService.getMemorias()
    this.carga = true
    this.categoriaActual = 'Memorias RAM'
  }

  async getProcesadores() {
    this.productos = await this.productosService.getProcesadores()
    this.carga = true
    this.categoriaActual = 'Procesadores'
  }

  async getPlacas() {
    this.productos = await this.productosService.getPlacas()
    this.carga = true
    this.categoriaActual = 'Placas de video'
  }

  async getGabinetes() {
    this.productos = await this.productosService.getGabinetes()
    this.carga = true
    this.categoriaActual = 'Gabinetes'
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
}

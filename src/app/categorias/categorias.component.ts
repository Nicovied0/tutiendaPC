import { Component } from '@angular/core';

import { ProductosService } from '../productos/productos.service';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  constructor(private productosService: ProductosService) { }
  public productos: any = []
  public carga = false
  public categoriaActual: string | null = null

  getProcesadores() {
    // this.productosService.
  }
  getGabinetes() { }
  getPlacass() { }

  async getMemorias() {
    console.log('ejecute menorias')
    this.productos = await this.productosService.getMemorias()
    this.carga = true
    this.categoriaActual = 'Memorias RAM'
  }

}

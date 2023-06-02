import { Component } from '@angular/core';
import { ProductosService } from './productsEdit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent {
  constructor(private productosService: ProductosService, private router: Router) { }
  public loading = false
  productos: any = []

  ngOnInit() {
    this.productosService.getProductos().then((results) => {
      this.productos = results
      console.log(this.productos)
      this.loading = true
    }).catch((error) => {
      console.error('Error al obtener los repositorios', error);
    })
  }

  Edit(id: number) {
    console.log(id)
    this.router.navigate(['/perfil/administrador/producto', id]);
  }

}

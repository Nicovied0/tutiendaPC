import { Component } from '@angular/core';
import { ProductosEditService } from '../Servicios/productsEdit.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent {
  constructor(private productosService: ProductosEditService, private router: Router) { }
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
  deleteProduct(id: number) {
    console.log(id)
    Swal.fire({
      title: 'Esta seguro?',
      text: `Esta seguro de borrar el producto #${id}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Borrado Exitosamente!',
          `Producto # ${id}.`,
          'success'
        )
        this.productosService.deleteProductoById(id)
      }
    })
  }
}

import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService } from '../Servicios/admin.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  producto: any = {};
  public imagenCargada = true

  constructor(private adminService: AdminService) {
    this.producto.dispible = true; // Asignar el valor por defecto a dispible
  }


  cargarImagen() {
    console.log(this.producto.imagen)
    Swal.fire({
      title: 'Imagen cargada Correctamente!',
      // text: `Producto N: ${this.productoId.id} `,
      icon: 'success',
      confirmButtonText: 'Continuar'
    })
    this.imagenCargada = false
  }
  editImagen() {
    console.log(this.producto.imagen)
    this.imagenCargada = true
  }
  todosLosCamposRellenados(): boolean {
    // Verifica si todos los campos están rellenados
    return (
      this.producto.imagen &&
      this.producto.nombre &&
      this.producto.categoria &&
      this.producto.precio &&
      this.producto.dispible !== undefined
    );
  }


  guardarProducto() {
    // Aquí puedes utilizar el objeto `producto` para guardar los valores en tu lógica
    console.log(this.producto);

    this.producto.id = ''; // Asignar un valor único al campo id, por ejemplo

    this.adminService.obtenerProductos().then((productos: any) => {
      const ultimoId = this.adminService.obtenerUltimoId(productos);
      const nuevoId = this.adminService.generarNuevoId(ultimoId);
      this.producto.id = nuevoId.toString();

      this.adminService.postProducto(this.producto).then(() => {
        Swal.fire({
          title: 'Producto creado Correctamente!',
          text: `Se agregó "${this.producto.nombre}" a la lista de productos`,
          icon: 'success',
          confirmButtonText: 'Continuar'
        });
      }).catch(error => {
        console.error('Error al crear el producto:', error);
        Swal.fire({
          title: 'Error',
          text: 'Ocurrió un error al crear el producto',
          icon: 'error',
          confirmButtonText: 'Continuar'
        });
      });
    }).catch(error => {
      console.error('Error al obtener los productos:', error);
    });
  }

}

import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  producto: any = {};
  public imagenCargada = true

  constructor() {
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
    Swal.fire({
      title: 'Producto creado Correctamente!',
      text: `Se agrego " ${this.producto.nombre} "  a la lista de productos`,
      icon: 'success',
      confirmButtonText: 'Continuar'
    })
  }

}

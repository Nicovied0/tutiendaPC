import { Component } from '@angular/core';

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
    this.imagenCargada = false
  }
  editImagen() {
    console.log(this.producto.imagen)
    this.imagenCargada = true
  }

  guardarProducto() {
    // Aquí puedes utilizar el objeto `producto` para guardar los valores en tu lógica
    console.log(this.producto);
  }

}

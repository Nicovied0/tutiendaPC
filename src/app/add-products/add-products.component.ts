import { Component } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  producto: any = {};
  constructor() {
    this.producto.dispible = true; // Asignar el valor por defecto a dispible
  }


  guardarProducto() {
    // Aquí puedes utilizar el objeto `producto` para guardar los valores en tu lógica
    console.log(this.producto);
  }

}

import { Component } from '@angular/core';
// import Img from '../../assets/imgCarrusel1.png'

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  images = [
    { url: '../../assets/imgCarrusel1.png', title: 'Producto 1', description: 'Descripción del producto 1' },
    { url: '../../assets/imgCarrusel2.png', title: 'Producto 2', description: 'Descripción del producto 2' },
    { url: '../../assets/imgCarrusel3.png', title: 'Producto 3', description: 'Descripción del producto 3' },
    { url: '../../assets/imgCarrusel4.png', title: 'Producto 4', description: 'Descripción del producto 4' },
  ];
}

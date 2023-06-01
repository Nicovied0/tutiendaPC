import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public image = 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/BLZJHTB27ZHUPKK3A7GXTMIEQA.jpg'

  constructor(private router: Router) { }

  goProductos() {
    this.router.navigate(['/productos']);
  }
  goCategorias() {
    this.router.navigate(['/categorias']);
  }

  ngOnInit() {

    Swal.fire({
      title: 'El desarrollador esta trabajando en nuevos cambios en la web!',
      text: 'Pueden surgir errores!',
      imageUrl: this.image,
      confirmButtonText: 'Continuar'
    })
  }
}

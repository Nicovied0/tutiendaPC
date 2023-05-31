import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public image = 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/BLZJHTB27ZHUPKK3A7GXTMIEQA.jpg'
  ngOnInit() {

    Swal.fire({
      title: 'El desarrollador esta trabajando en nuevos cambios en la web!',
      text: 'Puede que surgan errores!',
      imageUrl: this.image,
      confirmButtonText: 'Continuar'
    })
  }
}

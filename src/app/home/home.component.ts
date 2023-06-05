import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  constructor(private router: Router) { }
  public imagen: string = 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/BLZJHTB27ZHUPKK3A7GXTMIEQA.jpg';
  lastVisit: Date | null = null;


  goProductos() {
    this.router.navigate(['/productos']);
  }

  goCategorias() {
    this.router.navigate(['/categorias']);
  }
  goEnvio() {
    this.router.navigate(['/formasDeEnvio']);
  }

  ngOnInit() {
    // Obtener la fecha de la última visita almacenada en localStorage
    const lastVisitString = localStorage.getItem('lastVisit');
    if (lastVisitString) {
      this.lastVisit = new Date(lastVisitString);
    }

    // Obtener la fecha actual
    const currentDate = new Date();

    // Calcular la diferencia en milisegundos entre la fecha actual y la última visita
    const diffMilliseconds = currentDate.getTime() - (this.lastVisit?.getTime() || 0);

    // Convertir la diferencia en horas
    const diffHours = diffMilliseconds / (1000 * 60 * 60);

    // Mostrar el mensaje solo si han pasado más de 24 horas desde la última visita
    if (diffHours >= 24) {
      Swal.fire({
        title: 'El desarrollador está trabajando en nuevos cambios en la web!',
        text: 'Pueden surgir errores!',
        imageUrl: this.imagen,
        confirmButtonText: 'Continuar',
        imageHeight: 150
      });

      // Actualizar la fecha de la última visita en localStorage
      localStorage.setItem('lastVisit', currentDate.toISOString());
    }
  }
}


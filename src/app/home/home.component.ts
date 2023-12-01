import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
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

  

}


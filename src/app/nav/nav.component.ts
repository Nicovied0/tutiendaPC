import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private router: Router) { }

  goProfile() {
    this.router.navigate(['/perfil']);
  }
  goHome(){
    this.router.navigate(['/']);
  }
  goCarrito(){
    this.router.navigate(['/carrito']);
  }
}

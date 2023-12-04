import { Component } from '@angular/core';
import { SearchService } from '../Servicios/search.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-serch-bar',
  templateUrl: './serch-bar.component.html',
  styleUrls: ['./serch-bar.component.css']
})
export class SerchBarComponent {
  public value: any;
  public showDropdown: boolean = false;
  public resultados: any[] = [];
  public resultadosNoEncontrados = false

  constructor(private search: SearchService, private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showDropdown = false;
        this.value = ''
      }
    });
  }

  searchButton(data: string) {
    this.search.getProductsByName(data).then((resultados) => {
      this.resultados = resultados;
      this.showDropdown = true;
      if (this.resultados.length) {
        this.resultadosNoEncontrados = false
      } else {
        this.resultadosNoEncontrados = true
      }
      console.log(this.resultadosNoEncontrados)
    });
  }
  goProduct(id: number) {
    this.showDropdown = false
    this.value = ''
    this.router.navigate(['/producto', id]);

  }
}

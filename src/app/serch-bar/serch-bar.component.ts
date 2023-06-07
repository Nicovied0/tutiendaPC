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
    });
  }
  goProduct(id: number) {
    console.log(id)
    this.showDropdown = false
    this.value = ''
    this.router.navigate(['/producto', id]);

  }
}

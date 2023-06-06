import { Component } from '@angular/core';
import { SearchService } from '../Servicios/search.service';

@Component({
  selector: 'app-serch-bar',
  templateUrl: './serch-bar.component.html',
  styleUrls: ['./serch-bar.component.css']
})
export class SerchBarComponent {

  constructor(private search: SearchService) { }
  console() {
    this.search.soyConsole()
  }
}

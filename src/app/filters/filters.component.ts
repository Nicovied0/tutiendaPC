import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output() filterChanged = new EventEmitter<string>();

 
  onFilterChange(filter: string) {
    console.log(filter);
    this.filterChanged.emit(filter); // Emite el evento con el valor del filtro seleccionado
  }
}

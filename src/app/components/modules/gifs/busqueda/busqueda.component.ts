import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['../../../../app.component.css'],
})
export class BusquedaComponent {
  // Atributo
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  // Constructor
  constructor(private gifsService: GifsService) {}

  // Método: void -> Realizar Búsqueda
  search() {
    // Variable
    const value = this.txtSearch.nativeElement.value;

    // Condición: Búsqueda -> ¿La búsqueda está vacía?
    if (value.trim().length === 0) {
      // Situación: Búsqueda -> Si
      return;
    }

    // Acción: Realiza la búsqueda y lo agrega al historial
    this.gifsService.buscarGifs(value);
    // Acción: Vacía el campo de búsqueda
    this.txtSearch.nativeElement.value = '';
  }
}

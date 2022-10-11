import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  // Variables
  private _history: string[] = [];
  private apiKey: string = '6WflDxdVmo0ISQNDTvkDm4Q6oHDR1Kp9';
  public response: Gif[] = [];

  // Método: Get -> Historial de búsqueda
  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {}

  // Método: void -> Buscar Gifts
  buscarGifs(query: string) {
    // Acción: Quitar espacios en blanco al inicio y colocar la consulta en lowerCamelCase
    query = query.trim().toLowerCase();

    // Condición: Incluye -> ¿La nueva búsqueda no se encuentra en el historial?
    if (!this._history.includes(query)) {
      // Situación: Incluye -> Todavía no está incluida
      this._history.unshift(query);
      // Acción: Mostrará unicamente las 10 búsquedas más recientes
      this._history = this._history.splice(0, 10);
    }

    // Acción: Petición HTTP => GET
    this.http
      .get<SearchGifsResponse>(
        `https://api.giphy.com/v1/gifs/search?apikey=${this.apiKey}&q=${query}&limit=10`
      )
      .subscribe((resp) => {
        this.response = resp.data;
      });
  }
}

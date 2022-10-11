import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['../../../../app.component.css'],
})
export class ResultadosComponent {
  constructor(private gifsService: GifsService) {}

  get response() {
    return this.gifsService.response;
  }
}

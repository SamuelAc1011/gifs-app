import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './modules/gifs/gifs-page/gifs-page.component';
import { BusquedaComponent } from './modules/gifs/busqueda/busqueda.component';
import { ResultadosComponent } from './modules/gifs/resultados/resultados.component';

@NgModule({
  declarations: [GifsPageComponent, BusquedaComponent, ResultadosComponent],
  exports: [GifsPageComponent],
  imports: [CommonModule],
})
export class GifsModule {}

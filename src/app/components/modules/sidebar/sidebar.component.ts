import { Component, OnInit } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../../app.component.css'],
})
export class SidebarComponent {
  get history() {
    return this.gifService.history;
  }

  constructor(private gifService: GifsService) {}
}

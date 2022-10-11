import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './modules/sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  imports: [CommonModule],
})
export class SharedModule {}

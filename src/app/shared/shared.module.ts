import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer/footer.component';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent
  ],
  exports: [SidebarComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

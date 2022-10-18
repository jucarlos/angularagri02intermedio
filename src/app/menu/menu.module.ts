import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuNavbarComponent } from './menu-navbar/menu-navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuNavbarComponent
  ],
  exports: [
    MenuNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MenuModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ComunesComponent } from './pages/comunes/comunes.component';
import { AvanzadosComponent } from './pages/avanzados/avanzados.component';
import { PersonalizadosComponent } from './pages/personalizados/personalizados.component';


@NgModule({
  declarations: [
    HomeComponent,
    ComunesComponent,
    AvanzadosComponent,
    PersonalizadosComponent
  ],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }

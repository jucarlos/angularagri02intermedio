import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ComunesComponent } from './pages/comunes/comunes.component';
import { AvanzadosComponent } from './pages/avanzados/avanzados.component';
import { PersonalizadosComponent } from './pages/personalizados/personalizados.component';
import { AlrevesPipe } from './pipes/alreves.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    ComunesComponent,
    AvanzadosComponent,
    PersonalizadosComponent,
    AlrevesPipe
  ],
  imports: [
    CommonModule,
    PipesRoutingModule
  ]
})
export class PipesModule { }

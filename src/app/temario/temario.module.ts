import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListadoComponent } from './pages/listado/listado.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';


@NgModule({
    declarations: [
    ListadoComponent,
    TarjetaComponent
  ],
  imports: [
     CommonModule
  ],
  exports: [
    TarjetaComponent
  ]
})
export class TemarioModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvanzadosComponent } from './pages/avanzados/avanzados.component';
import { ComunesComponent } from './pages/comunes/comunes.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalizadosComponent } from './pages/personalizados/personalizados.component';

const routes: Routes = [

    {
      path: '',
      component: HomeComponent,
      children: [
        { path: 'comunes', component: ComunesComponent },
        { path: 'avanzados', component: AvanzadosComponent },
        { path: 'personalizados', component: PersonalizadosComponent },
        { path: '**', redirectTo: 'comunes'}
      ]
    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }

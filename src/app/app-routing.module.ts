import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/pages/homepage/homepage.component';
import { ListadoComponent } from './temario/pages/listado/listado.component';


const rutas: Routes = [

    {
        path: 'home',
        component: HomepageComponent
    },
    {
        path: 'temario',
        component: ListadoComponent
    },
    {
        path: 'pipes',
        loadChildren: () => import('./pipes/pipes.module').then( m => m.PipesModule),
    },

    {
        path: '**',
        redirectTo: 'home'
    }

];


@NgModule({
    imports: [
        RouterModule.forRoot( rutas )
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
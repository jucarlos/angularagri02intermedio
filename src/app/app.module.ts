import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { PipesModule } from './pipes/pipes.module';
import { TemarioModule } from './temario/temario.module';

// Registrar otros idiomas.
import localeES from '@angular/common/locales/es';
import localeFR from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeES);
registerLocaleData(localeFR);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    TemarioModule,
    PipesModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

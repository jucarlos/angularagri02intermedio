import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { TemarioModule } from './temario/temario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    TemarioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

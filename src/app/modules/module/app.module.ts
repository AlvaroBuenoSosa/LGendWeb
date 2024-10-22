import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Importa RouterModule
import { AppComponent } from '../../app.component';

@NgModule({
  declarations: [
    ],
  imports: [
    BrowserModule,
    RouterModule, // Asegúrate de importar RouterModule
    AppComponent,
  ],
  providers: [],
  bootstrap: []
})

export class AppModule { }
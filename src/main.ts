import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // Si tienes rutas
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Opcional: Si tienes un sistema de enrutamiento, lo agregas aquí
    provideHttpClient() 
  ]
}).catch(err => console.error(err));

import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavegationService {

  private previousUrl: string = '';

  constructor(private router: Router) {
    // Captura el evento de inicio de navegación
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Guarda la URL anterior antes de que se navegue a la nueva página
        this.previousUrl = event.url;
      }
    });
  }

  // Método para obtener la URL anterior
  getPreviousUrl(): string {
    return this.previousUrl;
  }
}
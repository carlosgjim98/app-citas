import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-de-compatibilidad',
  templateUrl: './formulario-de-compatibilidad.page.html',
  styleUrls: ['./formulario-de-compatibilidad.page.scss'],
})
export class FormularioDeCompatibilidadPage implements OnInit {

  submitButtonText: string = 'Guardar Configuración'; // Valor por defecto
  routerLink: string = '/tabs/home'; // Ruta por defecto
  previousUrl = ''; // Almacena la URL anterior

  answers = {
    day: false,
    night: false,
    beach: false,
    mountain: false,
    espiritual: false,
    racional: false,
  };

  selectedRating: number | null = null;

  constructor(private location: Location, private activatedRoute: ActivatedRoute) { }

  goBack() {
    this.location.back(); // Navega a la página anterior
  }


  selectRating(rating: number) {
    this.selectedRating = rating;
  }

  submitAnswers() {
    console.log('Respuestas enviadas:', this.answers, this.selectedRating);
    // Maneja el envío de respuestas
  }
  selectOption(selected: string, other: string) {
    this.answers[selected] = !this.answers[selected]; // Alterna el valor del checkbox seleccionado
    if (this.answers[selected]) {
      this.answers[other] = false; // Deselecciona la opción opuesta
    }
  }
  ngOnInit() {
    // Recuperar el parámetro 'fromPage' desde la URL
    this.activatedRoute.queryParams.subscribe((params) => {
      const fromPage = params['fromPage']; // Obtener el valor de 'fromPage'

      // Cambiar el texto y la ruta del botón según la página de origen
      if (fromPage === 'login') {
        this.submitButtonText = 'Enviar respuestas';
        this.routerLink = '/resultados';
      } else if (fromPage === 'register') {
        this.submitButtonText = 'Enviar respuestas';
        this.routerLink = '/resultados';
      } 
      else if (fromPage === 'profile') {
        this.submitButtonText = 'Guardar Cambios';
        this.routerLink = "/tabs/profile";
      } else {
        // Caso por defecto
        this.submitButtonText = 'Guardar Cambios';
        this.routerLink = '/tabs/profile';
      }
    });
  }
}

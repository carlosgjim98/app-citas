import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario-de-compatibilidad',
  templateUrl: './formulario-de-compatibilidad.page.html',
  styleUrls: ['./formulario-de-compatibilidad.page.scss'],
})
export class FormularioDeCompatibilidadPage implements OnInit {

  answers = {
    day: false,
    night: false,
    beach: false,
    mountain: false,
  };

  selectedRating: number | null = null;

  constructor(private location: Location) { }

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
  }

}

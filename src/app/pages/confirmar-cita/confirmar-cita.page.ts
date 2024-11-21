import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-confirmar-cita',
    templateUrl: './confirmar-cita.page.html',
    styleUrls: ['./confirmar-cita.page.scss'],
    standalone: false
})
export class ConfirmarCitaPage implements OnInit {

  users = [
    {
      name: 'Usuario 1',
      compatibility: 90,
      questions: 8,
      profilePicture: 'assets/icons/Enmascarar grupo 1.svg',
    },
  ]
 

  constructor(private location: Location) { }

  goBack() {
    this.location.back(); // Navega a la página anterior
  }


  ngOnInit() {
  }

}

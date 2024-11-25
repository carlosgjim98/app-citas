import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detalle-cita',
    templateUrl: './detalle-cita.page.html',
    styleUrls: ['./detalle-cita.page.scss'],
    standalone: false
})
export class DetalleCitaPage implements OnInit {

  horaCita: string = '';
  restaurante: string = '';
  diaNumero: string = '';
  returnLink: string = '/tabs/mensajes';

  users = [
    {
      name: 'Usuario 1',
      compatibility: 90,
      questions: 8,
      profilePicture: 'assets/icons/Enmascarar grupo 1.svg',
    },
  ]

  constructor(private activatedRoute: ActivatedRoute, private location: Location) { }


  goBack() {
    this.location.back(); // Navega a la página anterior
  }

  ngOnInit() {
    // Obtener los parámetros de la URL
    this.activatedRoute.queryParams.subscribe(params => {
      this.horaCita = params['horaCita'];  // Nombre del chat
      this.restaurante = params['restaurante'];  // Foto del avatar
      this.diaNumero = params['diaNumero']
    });

  }

}

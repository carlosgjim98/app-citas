import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-seleccion-fecha-resultados',
    templateUrl: './seleccion-fecha-resultados.page.html',
    styleUrls: ['./seleccion-fecha-resultados.page.scss'],
    standalone: false
})
export class SeleccionFechaResultadosPage implements OnInit {

  constructor(private location: Location) { }

  users = [
    {
      name: 'Usuario 1',
      compatibility: 90,
      questions: 8,
      profilePicture: 'assets/icons/Enmascarar grupo 1.svg',
    },
    {
      name: 'Usuario 2',
      compatibility: 85,
      questions: 8,
      profilePicture: 'assets/icons/Enmascarar grupo 1.svg',
    },
    {
      name: 'Usuario 3',
      compatibility: 82,
      questions: 5,
      profilePicture: 'assets/icons/Enmascarar grupo 1.svg',
    },
  ];
  selectedUser: any = null;

  selectUser(user: any) {
    this.selectedUser = user;
  }



  goBack() {
    this.location.back(); // Navega a la página anterior
  }


  ngOnInit() {
  }

}


import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  constructor(private location: Location,) { }
  goBack() {
    this.location.back(); // Navega a la página anterior
  }

  ngOnInit() {
  }

}

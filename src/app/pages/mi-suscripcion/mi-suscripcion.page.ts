import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-suscripcion',
  templateUrl: './mi-suscripcion.page.html',
  styleUrls: ['./mi-suscripcion.page.scss'],
})
export class MiSuscripcionPage implements OnInit {

  datos: any[] = [];

  constructor() { }

  ngOnInit() {

    this.cargarDatos();
  }

  cargarDatos(){

    this.datos = [
      
      {
        titulo: 'Tu Plan',
        bonus: "Dos bonos de cita",
        precio: '14,99€ /',
        tiempo: 'al mes',
        nuevoMensaje: 'Próxima renovación',
        fecha: '24/11/2024',
        
        },

    ]
  }
}

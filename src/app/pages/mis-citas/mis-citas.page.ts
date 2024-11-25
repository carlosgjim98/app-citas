import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mis-citas',
    templateUrl: './mis-citas.page.html',
    styleUrls: ['./mis-citas.page.scss'],
    standalone: false
})
export class MisCitasPage implements OnInit {

  citas: any[] = [];

  constructor() { }

  ngOnInit() {

    this.cargarCitas();

  }

  cargarCitas() {
    
     
    
    this.citas = [
    
    {
      dia: 'Vie',
      diaNumero: "10",
      restaurante: 'Restaurante Cena',
      hora: '9:30 P.M.',
      ruta: ['/detalle-cita']
    },
    {
      dia: 'Jue',
      diaNumero: "16",
      restaurante: 'Restaurante Almuerzo',
      hora: '13:30 P.M.',
      ruta: ['/detalle-cita']
    },
     
    ];
  }  

}

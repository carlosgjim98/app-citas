import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-eulas',
    templateUrl: './eulas.page.html',
    styleUrls: ['./eulas.page.scss'],
    standalone: false
})
export class EulasPage implements OnInit {

  constructor( private location: Location) { }

  
  goBack() {
    this.location.back(); // Navega a la página anterior
  }

  ngOnInit() {
  }

}

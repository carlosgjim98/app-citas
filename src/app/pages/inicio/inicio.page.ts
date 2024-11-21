import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
    standalone: false
})
export class InicioPage implements OnInit {


    dates = [
      { label: '10 de Noviembre de 2024', selected: false },
      { label: '11 de Noviembre de 2024', selected: false },
      { label: '16 de Noviembre de 2024', selected: false }
    ];
  
    
  
  constructor() { }

  
  ngOnInit() {

    
  }

  onSelectDate(selectedDate: any) {
    // Desmarcar todos los checkboxes
    this.dates.forEach(date => {
      date.selected = false;
    });
    selectedDate.selected = true;
  }

}

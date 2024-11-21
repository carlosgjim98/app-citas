import { Component } from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss'],
    standalone: false
})
export class TabsPage {

  public pages = [
    
    { tab: 'inicio', name: 'Inicio',  icon:"assets/icons/iconos-tabs/Grupo 12229.svg" },
    { tab: 'citas', name: 'Citas',  icon:"assets/icons/iconos-tabs/Grupo 12231.svg" },
    { tab: 'chat', name: 'Chat',  icon:"assets/icons/iconos-tabs/Trazado 48486.svg" },
    { tab: 'profile', name: 'Perfil',  icon:"assets/icons/iconos-tabs/Unión 4.svg" }

  ];
  constructor() {}

}

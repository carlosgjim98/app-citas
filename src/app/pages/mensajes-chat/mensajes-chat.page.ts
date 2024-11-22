import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-mensajes-chat',
  templateUrl: './mensajes-chat.page.html',
  styleUrls: ['./mensajes-chat.page.scss'],
})
export class MensajesChatPage implements OnInit {

  chatName: string = '';
  chatAvatar: string = '';
  returnLink: string = '/tabs/mensajes';

  isModalOpen: boolean = false;
  isReportModalOpen = false; 
  desnudosChecked = false;
  odioChecked = false;
  estafaChecked = false;
  violenciaChecked = false;
  ventaIlegalChecked = false;
  bullyingChecked = false;
  infraccionChecked = false;
  suicidioChecked = false;
  spamChecked = false;
  problemaNoListaChecked = false;

  constructor(private activatedRoute: ActivatedRoute, private location: Location) {}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

   openReportModal() {
    this.isReportModalOpen = true; // Abre el segundo modal
    this.closeModal(); // Cierra el primer modal
  }

  closeReportModal() {
    this.isReportModalOpen = false; // Cierra el segundo modal
    this.resetCheckboxes(); // Opcionalmente, reinicia los checkboxes al cerrar
  }

  resetCheckboxes() {
    this.desnudosChecked = false;
    this.odioChecked = false;
    this.estafaChecked = false;
    this.violenciaChecked = false;
    this.ventaIlegalChecked = false;
    this.bullyingChecked = false;
    this.infraccionChecked = false;
    this.suicidioChecked = false;
    this.spamChecked = false;
    this.problemaNoListaChecked = false;
  }

  submitReport() {
    const reasons = [];
    if (this.desnudosChecked) reasons.push('Desnudos o actividad sexual');
    if (this.odioChecked) reasons.push('Lenguaje o símbolos que incitan al odio');
    if (this.estafaChecked) reasons.push('Estafa o fraude');
    if (this.violenciaChecked) reasons.push('Violencia u organizaciones peligrosas');
    if (this.ventaIlegalChecked) reasons.push('Venta de bienes ilegales o regulados');
    if (this.bullyingChecked) reasons.push('Bullying o acoso');
    if (this.infraccionChecked) reasons.push('Infracción de la propiedad intelectual');
    if (this.suicidioChecked) reasons.push('Suicidio o autolesiones');
    if (this.spamChecked) reasons.push('Spam');
    if (this.problemaNoListaChecked) reasons.push('El problema no aparece en la lista');
    
    console.log('Mensaje reportado por:', reasons);
    this.closeReportModal(); // Cierra el modal de reporte después de reportar
  }
  goBack() {
    this.location.back(); // Navega a la página anterior
  }

  ngOnInit() {
    // Obtener los parámetros de la URL
    this.activatedRoute.queryParams.subscribe(params => {
      this.chatName = params['name'];  // Nombre del chat
      this.chatAvatar = params['avatar'];  // Foto del avatar
    });
  }
  

}


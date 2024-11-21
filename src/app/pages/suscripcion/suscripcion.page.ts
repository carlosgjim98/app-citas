import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';

@Component({
    selector: 'app-suscripcion',
    templateUrl: './suscripcion.page.html',
    styleUrls: ['./suscripcion.page.scss'],
    standalone: false
})
export class SuscripcionPage implements OnInit {

  constructor(private modalController: ModalController, ) { }

  @ViewChild('open_modal', { static: true }) open_modal!: IonModal;

  openModal() {
    this.open_modal.present();

  }

  ngOnInit() {
  }

}

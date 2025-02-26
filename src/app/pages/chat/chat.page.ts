import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {


  mensajes: any[] = [];
  chatName: string = '';
  chatAvatar: string = '';


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Obtener el tipo de usuario desde sessionStorage
    

    this.activatedRoute.queryParams.subscribe(params => {
      this.chatName = params['name'];  // Nombre del chat
      this.chatAvatar = params['avatar'];  // Foto del avatar
    });

 
    this.cargarMensajes();
  }

  cargarMensajes() {
    
     
    
      this.mensajes = [
      
      {
        nombre: 'Marta A.',
        nombreCompleto: "Marta Arias",
        foto: 'assets/imgs/Elipse 304@2x.png',
        tiempo: 'Hace 2 días',
        nuevoMensaje: 'Marta: Yo también!',
        mensaje: '',
        tieneNuevo: true,
        ruta: ['/mensajes-chat']
      },
      {
        nombre: 'Mario B.',
        nombreCompleto: "Mario Blanco",
        foto: 'assets/imgs/Elipse 407@2x.png',
        tiempo: 'Hace 1 semana',
        nuevoMensaje: '',
        mensaje: 'Mario: ¡Hola! ¿Qué tal?',
        tieneNuevo: false,
        ruta: ['/mensajes-chat']
      },
      {
        nombre: 'Marta S.' ,
        foto: 'assets/imgs/Elipse 562@2x.png',
        tiempo: 'Hace 2 semanas',
        nuevoMensaje: '',
        mensaje: 'Tú: has enviado 1 imagen',
        tieneNuevo: false
      },
      {
        nombre: 'Carlos E.',
        foto: 'assets/imgs/Elipse 412@2x.png',
        tiempo: 'Hace 2 semanas',
        nuevoMensaje: '',
        mensaje: 'Carlos: ¡Hola! ¿Qué tal?',
        tieneNuevo: false
      }
       
      ];
    }

    

    
   
  }

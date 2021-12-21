import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje:string = '';
  elemento:any;

  constructor(public chatSvc: ChatService) {
    this.chatSvc.cargarMensajes().subscribe(() => {
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
  }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje(){

    if(this.mensaje.length === 0){
      return;
    }

    this.chatSvc.agregarMensaje(this.mensaje)
                .then(()=> this.mensaje = "")
                .catch((err) => console.log('Error al enviar el mensaje',err));



  }

}

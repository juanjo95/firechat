import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private chatSvc:ChatService) { }

  ngOnInit(): void {
  }

  ingresar(proveedor:string){
    this.chatSvc.login(proveedor);
  }

}

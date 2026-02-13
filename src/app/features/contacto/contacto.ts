import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Fuentes } from "../../shared/fuentes/fuentes";

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, FormsModule, Fuentes],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  enviarMensaje() {
    alert('Gracias por escribirnos. Te responderemos en menos de 24 horas.');
  }
}

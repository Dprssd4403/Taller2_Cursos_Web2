import { Component } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Formulario } from '../formulario/formulario';
import { Soporte } from "../../shared/soporte/soporte";

@Component({
  selector: 'app-registro',
  imports: [Hero, Formulario, Soporte],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

}

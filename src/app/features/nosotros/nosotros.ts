import { Component } from '@angular/core';
import { Team } from "../../shared/team/team";
import { Portafolio } from "../../shared/portafolio/portafolio";
import { Testimonios } from '../../shared/testimonios/testimonios';

@Component({
  selector: 'app-nosotros',
  imports: [Team, Portafolio, Testimonios],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {

}

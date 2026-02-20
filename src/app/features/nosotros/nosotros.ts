import { Component } from '@angular/core';
import { Team } from "../../shared/team/team";
import { Portafolio } from "../../shared/portafolio/portafolio";
import { Testimonios } from '../../shared/testimonios/testimonios';
import { Blogs } from "../../shared/blogs/blogs";

@Component({
  selector: 'app-nosotros',
  imports: [Team, Portafolio, Testimonios, Blogs],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {

}

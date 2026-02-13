import { Component } from '@angular/core';
import { Hero } from "../../shared/hero/hero";
import { Services } from "../../shared/services/services";
import { Carrusel } from "../../shared/carrusel/carrusel";
import { Cards } from "../../shared/cards/cards";

@Component({
  selector: 'app-home',
  imports: [Hero, Services, Carrusel, Cards],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

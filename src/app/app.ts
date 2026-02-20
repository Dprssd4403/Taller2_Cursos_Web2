import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Footer } from "./shared/footer/footer";
import { Navbar } from './shared/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
    ngOnInit(): void {
      initFlowbite();
    }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CursosServices, Curso } from '../../services/cursos-services';

@Component({
  selector: 'app-catalogo-cursos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo-cursos.html'
})
export class CatalogoCursos implements OnInit {
  
  listaCursos: Curso[] = []; 

  constructor(private cursoService: CursosServices) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.cursoService.getCursos().subscribe({
      next: (data) => {
        this.listaCursos = data;
      },
      error: (err) => console.error('Error al conectar con la API', err)
    });
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  subtitulo: string = "Potencia tu carrera con nuestros cursos especializados";
  servicioSeleccionado: string = "Ninguno";

  servicios = [
    {
  id: 1,
  nombre: "Sede Central - Madrid",
  descripcion: "Nuestra sede principal equipada con laboratorios de última generación y áreas de coworking.",
  imagen: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
  activo: true
},
{
  id: 2,
  nombre: "Campus Tecnológico - CDMX",
  descripcion: "Ubicada en el corazón financiero, especializada en talleres presenciales y networking.",
  imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
  activo: true
},
{
  id: 3,
  nombre: "Sede Innovación - Buenos Aires",
  descripcion: "Espacio en desarrollo para nuestra próxima comunidad de aprendizaje en Sudamérica.",
  imagen: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop",
  activo: false 
},
  ];


  serviciosFiltrados = [...this.servicios];

  seleccionar(nombre: string) {
    this.servicioSeleccionado = nombre;
    console.log('Curso seleccionado:', nombre);
  }

  busqueda(event: Event) {
    const input = event.target as HTMLInputElement;
    const valor = input.value.toLowerCase();

    if (valor === '') {
      this.subtitulo = "Potencia tu carrera con nuestros cursos especializados";
    } else {
      this.subtitulo = `Cursos encontrados para: "${valor}"`;
    }

    this.serviciosFiltrados = this.servicios.filter(s =>
      s.nombre.toLowerCase().includes(valor) || 
      s.descripcion.toLowerCase().includes(valor)
    );
  }
}
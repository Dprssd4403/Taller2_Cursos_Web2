import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario, UsuarioServices } from '../../services/usuario-services';
import { Salir } from '../../guards/deactive-guard';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario implements OnInit, Salir {
  private servicioUsuario = inject(UsuarioServices);
  public servicioAuth = inject(AuthService); 
  private router = inject(Router);

  listaUsuarios = signal<Usuario[]>([]);
  editando = false;

  get esAdmin(): boolean {
    return this.servicioAuth.rolActual() === 'ADMIN';
  }

  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
    password: '',
    curso: '',
    fecha: '',
    rol: 'EMPLEADO' 
  };

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe(usuarios => {
      this.listaUsuarios.set(usuarios);
    });
  }

  guardarUsuario() {
    const accion = this.editando ? 'actualizar' : 'registrar';
    if (confirm(`¿Estás seguro de que deseas ${accion} a este usuario?`)) {
      if (this.editando && this.nuevoUsuario.id) {
        this.servicioUsuario.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(() => {
          this.finalizarYSalir();
        });
      } else {
        this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(() => {
          this.finalizarYSalir();
        });
      }
    }
  }

  private finalizarYSalir() {
    this.obtenerUsuarios();
    this.resetear();
    this.router.navigate(['/']);
  }

  eliminarUsuario(id: string) {
    if (confirm('¿Desea eliminar el registro?')) {
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {
        this.listaUsuarios.set(this.listaUsuarios().filter(u => u.id !== id));
      });
    }
  }

  seleccionarParaEditar(user: Usuario) {
    if (!this.esAdmin) return;
    this.editando = true;
    this.nuevoUsuario = { ...user };
  }

  resetear() {
    this.editando = false;
    this.nuevoUsuario = { 
      name: '', email: '', phone: '', password: '', curso: '', fecha: '', rol: 'EMPLEADO' 
    };
  }

  permiteSalir(): boolean {
    const hayDatos = (this.nuevoUsuario.name?.trim() ?? '') !== '';
    if (this.editando || hayDatos) {
      return confirm('Tienes cambios sin guardar. ¿Deseas salir?');
    }
    return true;
  }
}
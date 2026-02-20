import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  
  private authService = inject(AuthService);
  private router = inject(Router);

  iniciarSesion() {
    if (!this.email || !this.password) {
      alert('Por favor, completa todos los campos');
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: (exito) => {
        if (exito) {
          const rol = this.authService.getRole();
          console.log('Login exitoso. Rol:', rol);
          
          if (rol === 'ADMIN') {
            this.router.navigate(['/admin/cursos']);
          } else {
            this.router.navigate(['/']);
          }
        } else {
          alert('Correo o contraseña incorrectos. Inténtalo de nuevo.');
        }
      },
      error: (err) => {
        console.error('Error en el login:', err);
        alert('Ocurrió un error al conectar con el servidor.');
      }
    });
  }
}
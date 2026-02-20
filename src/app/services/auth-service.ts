import { inject, Injectable, signal } from '@angular/core';
import { User } from 'firebase/auth'; // Asegúrate de tener instalado: npm install firebase
import { map, Observable } from 'rxjs';
import { UsuarioServices } from './usuario-services';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private servicioUsuario = inject(UsuarioServices);

  sesionIniciada = signal<boolean>(localStorage.getItem('sesion') === 'true');
  rolActual = signal<string | null>(localStorage.getItem('rol'));
  usuario: User | null = null;

  login(email: string, password: string): Observable<boolean> {
    return this.servicioUsuario.getUsuarios().pipe(
      map(usuarios => {
        const usuarioCoincide = usuarios.find(u => u.email === email && u.password === password);

        if (usuarioCoincide) {
          localStorage.setItem('sesion', 'true');
          localStorage.setItem('user', JSON.stringify(usuarioCoincide));
          localStorage.setItem('rol', usuarioCoincide.rol);
          
          this.sesionIniciada.set(true);
          this.rolActual.set(usuarioCoincide.rol);

          return true;
        }
        return false;
      })
    );
  }

  getRole(): string | null {
    return this.rolActual();
  }

  logout() {
    localStorage.removeItem('sesion');
    localStorage.removeItem('user');
    localStorage.removeItem('rol');
    this.sesionIniciada.set(false);
    this.rolActual.set(null);
  }
}
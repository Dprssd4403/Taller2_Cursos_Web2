import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Curso {
  id?: string;
  titulo: string;
  instructor: string;
  descripcion: string;
  categoria: string;
  ubicacion: string;
  email_contacto: string;
  imagen_url: string;
  precio: number;
}

@Injectable({
  providedIn: 'root',
})
export class CursosServices {

  private readonly API_URL = 'https://698e88f0aded595c253214cc.mockapi.io/Cursos';

  constructor(private http: HttpClient) {}

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.API_URL);
  }

  addCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.API_URL, curso);
  }

  deleteCurso(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  updateCurso(id: string, curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.API_URL}/${id}`, curso);
  }
}
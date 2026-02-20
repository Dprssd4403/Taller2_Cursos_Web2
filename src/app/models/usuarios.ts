export interface Usuario {
  id?: string;
  name: string;
  email: string;
  phone: string;
  rol: 'ADMIN' | 'EMPLEADO';
  password?: string;
  curso?: string;
  fecha?: string;
}
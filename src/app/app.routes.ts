import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Registro } from './features/registro/registro';
import { Contacto } from './features/contacto/contacto';
import { Nosotros } from './features/nosotros/nosotros';
import { Cursos } from './shared/cursos/cursos';

export const routes: Routes = [

    { path: '', component: Home },
    { path: 'nosotros', component: Nosotros },
    { path: 'contacto', component: Contacto },
    { path: 'registro', component: Registro },
    { path: 'cursos', component: Cursos },
];

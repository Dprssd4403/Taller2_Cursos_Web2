import { CanDeactivateFn } from '@angular/router';


export interface Salir {
  permiteSalir: () => boolean;
}

export const authGuardDeactivate: CanDeactivateFn<Salir> = (component) => {

  return component.permiteSalir ? component.permiteSalir() : true;
};
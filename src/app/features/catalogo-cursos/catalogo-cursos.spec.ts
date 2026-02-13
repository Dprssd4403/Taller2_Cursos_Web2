import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoCursos } from './catalogo-cursos';

describe('CatalogoCursos', () => {
  let component: CatalogoCursos;
  let fixture: ComponentFixture<CatalogoCursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoCursos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoCursos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

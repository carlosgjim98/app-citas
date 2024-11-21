import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionFechaResultadosPage } from './seleccion-fecha-resultados.page';

describe('SeleccionFechaResultadosPage', () => {
  let component: SeleccionFechaResultadosPage;
  let fixture: ComponentFixture<SeleccionFechaResultadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionFechaResultadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

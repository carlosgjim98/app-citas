import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioDeCompatibilidadPage } from './formulario-de-compatibilidad.page';

describe('FormularioDeCompatibilidadPage', () => {
  let component: FormularioDeCompatibilidadPage;
  let fixture: ComponentFixture<FormularioDeCompatibilidadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDeCompatibilidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

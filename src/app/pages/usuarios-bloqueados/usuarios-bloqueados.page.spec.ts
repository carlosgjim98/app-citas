import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosBloqueadosPage } from './usuarios-bloqueados.page';

describe('UsuariosBloqueadosPage', () => {
  let component: UsuariosBloqueadosPage;
  let fixture: ComponentFixture<UsuariosBloqueadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosBloqueadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

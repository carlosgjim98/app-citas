import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CondicionesDeVentaPage } from './condiciones-de-venta.page';

describe('CondicionesDeVentaPage', () => {
  let component: CondicionesDeVentaPage;
  let fixture: ComponentFixture<CondicionesDeVentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionesDeVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

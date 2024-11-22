import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CondicionesVentaPage } from './condiciones-venta.page';

describe('CondicionesVentaPage', () => {
  let component: CondicionesVentaPage;
  let fixture: ComponentFixture<CondicionesVentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionesVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

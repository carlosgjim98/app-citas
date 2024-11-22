import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiSuscripcionPage } from './mi-suscripcion.page';

describe('MiSuscripcionPage', () => {
  let component: MiSuscripcionPage;
  let fixture: ComponentFixture<MiSuscripcionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiSuscripcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

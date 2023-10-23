import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarplanFibraOpticaComponent } from './modal-agregarplan-fibra-optica.component';

describe('ModalAgregarplanFibraOpticaComponent', () => {
  let component: ModalAgregarplanFibraOpticaComponent;
  let fixture: ComponentFixture<ModalAgregarplanFibraOpticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarplanFibraOpticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAgregarplanFibraOpticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarplanWlanComponent } from './modal-agregarplan-wlan.component';

describe('ModalAgregarplanWlanComponent', () => {
  let component: ModalAgregarplanWlanComponent;
  let fixture: ComponentFixture<ModalAgregarplanWlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAgregarplanWlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAgregarplanWlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

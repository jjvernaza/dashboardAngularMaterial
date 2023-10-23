import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-agregarplan-wlan',
  templateUrl: './modal-agregarplan-wlan.component.html',
  styleUrls: ['./modal-agregarplan-wlan.component.scss']
})
export class ModalAgregarplanWlanComponent {
  nuevoPlanWLAN: any = {}; // Modelo para el nuevo plan WLAN

  constructor(public dialogRef: MatDialogRef<ModalAgregarplanWlanComponent>) {}

  ngOnInit() {}

  agregarPlanWLAN() {
    // Aquí puedes agregar la lógica para guardar el nuevo plan WLAN en tu base de datos o servicio.
    // this.nuevoPlanWLAN contiene los datos del nuevo plan.
    // Cierra el modal después de agregar el plan.
    this.dialogRef.close();
  }

  cancelar() {
    // Cierra el modal sin agregar el plan.
    this.dialogRef.close();
  }
}

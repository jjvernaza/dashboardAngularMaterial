import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-agregarplan-fibra-optica',
  templateUrl: './modal-agregarplan-fibra-optica.component.html',
  styleUrls: ['./modal-agregarplan-fibra-optica.component.scss']
})
export class ModalAgregarplanFibraOpticaComponent {
  nuevoPlanFibraOptica: any = {}; // Modelo para el nuevo plan de Fibra Óptica

  constructor(public dialogRef: MatDialogRef<ModalAgregarplanFibraOpticaComponent>) {}

  ngOnInit() {}

  agregarPlanFibraOptica() {
    // Aquí puedes agregar la lógica para guardar el nuevo plan de Fibra Óptica en tu base de datos o servicio.
    // this.nuevoPlanFibraOptica contiene los datos del nuevo plan.
    // Cierra el modal después de agregar el plan.
    this.dialogRef.close();
  }

  cancelar() {
    // Cierra el modal sin agregar el plan.
    this.dialogRef.close();
  }
}

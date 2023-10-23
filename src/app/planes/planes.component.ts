import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAgregarplanWlanComponent } from '../modal-agregarplan-wlan/modal-agregarplan-wlan.component';
import { ModalAgregarplanFibraOpticaComponent } from '../modal-agregarplan-fibra-optica/modal-agregarplan-fibra-optica.component';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss']
})
export class PlanesComponent {
  displayedColumns: string[] = ['id', 'planMB', 'valorPlan', 'acciones'];

  planesWLAN = [
    { id: 1, planMB: 'Plan WLAN 1', valorPlan: '100' },
    // Agrega más datos de planes WLAN aquí
  ];

  planesFibraOptica = [
    { id: 1, planMB: 'Plan Fibra Óptica 1', valorPlan: '200' },
    // Agrega más datos de planes de Fibra Óptica aquí
  ];

  constructor(public dialog: MatDialog) {}

  abrirModalAgregarPlanWLAN() {
    const dialogRef = this.dialog.open(ModalAgregarplanWlanComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Agrega el nuevo plan WLAN a la lista
        this.planesWLAN.push(result);
      }
    });
  }

  abrirModalAgregarPlanFibraOptica() {
    const dialogRef = this.dialog.open(ModalAgregarplanFibraOpticaComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Agrega el nuevo plan de Fibra Óptica a la lista
        this.planesFibraOptica.push(result);
      }
    });
  }

  editarPlan(plan: any) {
    // Implementa la lógica para editar un plan aquí
  }

  eliminarPlan(plan: any) {
    // Implementa la lógica para eliminar un plan aquí
  }

  aplicarFiltro(event: Event) {
    const filtro = (event.target as HTMLInputElement).value.trim().toLowerCase();
    // Puedes implementar la lógica para filtrar tus planes aquí
    // Por ejemplo, puedes usar Array.prototype.filter para filtrar los planes basados en el valor de filtro
  }
}

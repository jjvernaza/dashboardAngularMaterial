import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-cliente-modal',
  templateUrl: './agregar-cliente-modal.component.html',
  styleUrls: ['./agregar-cliente-modal.component.scss']
})
export class AgregarClienteModalComponent {
  nuevoCliente: any = {}; // Objeto para almacenar los datos del nuevo cliente

  constructor(public dialogRef: MatDialogRef<AgregarClienteModalComponent>) {}

  agregarCliente() {
    // Aquí puedes agregar la lógica para guardar el nuevo cliente
    // Por ejemplo, puedes agregarlo a la lista de clientes en tu componente principal

    this.dialogRef.close(this.nuevoCliente); // Cierra el modal y pasa el nuevo cliente como resultado
  }

  cancelar() {
    this.dialogRef.close(); // Cierra el modal sin pasar ningún resultado
  }
}

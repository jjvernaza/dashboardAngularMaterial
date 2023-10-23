import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MasterUsersComponent } from '../master-users/master-users.component';

@Component({
  selector: 'app-mater-users-modal',
  templateUrl: './mater-users-modal.component.html',
  styleUrls: ['./mater-users-modal.component.scss']
})
export class MaterUsersModalComponent {
  nuevoMasterUser: any = {}; // Objeto para almacenar los datos del nuevo Master User

  constructor(public dialogRef: MatDialogRef<MaterUsersModalComponent>) {}

  ngOnInit() {}

  // Función para cerrar el modal sin agregar un nuevo Master User
  cancelar(): void {
    this.dialogRef.close();
  }

  // Función para agregar un nuevo Master User
  agregarMasterUser(): void {
    // Aquí puedes implementar la lógica para agregar el nuevo Master User a tu lista de Master Users.
    // Por ejemplo, puedes emitir un evento que maneje esto en el componente que muestra la lista de Master Users.
    // Luego, cierras el modal.
    this.dialogRef.close(this.nuevoMasterUser);
  }
}

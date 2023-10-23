import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterUsersModalComponent } from '../mater-users-modal/mater-users-modal.component';

@Component({
  selector: 'app-master-users',
  templateUrl: './master-users.component.html',
  styleUrls: ['./master-users.component.scss']
})
export class MasterUsersComponent {
  displayedColumns: string[] = ['id', 'cc', 'nombre', 'apellidos', 'cargo', 'usuario', 'contrasena', 'acciones'];

  masterUsers = [
    { id: 1, cc: '123456', nombre: 'Juan', apellidos: 'Perez', cargo: 'Manager', usuario: 'juanperez', contrasena: '********' },
    // Agrega más datos de Master Users aquí
  ];

  constructor(public dialog: MatDialog) {}

  aplicarFiltro(event: any) {
    const valor = event.target.value.trim().toLowerCase();
    // Implementa la lógica de filtrado según tus necesidades
  }

  abrirModalAgregarMasterUser() {
    const dialogRef = this.dialog.open(MaterUsersModalComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Agrega el nuevo Master User a la lista
        this.masterUsers.push(result);
      }
    });
  }

  editarMasterUser(user: any) {
    // Implementa la lógica para editar un Master User aquí
  }

  eliminarMasterUser(user: any) {
    // Implementa la lógica para eliminar un Master User aquí
  }
}

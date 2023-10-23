import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarClienteModalComponent } from '../agregar-cliente-modal/agregar-cliente-modal.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  displayedColumns: string[] = ['id', 'cc', 'nombre', 'apellidos', 'planMB', 'tipoServicio', 'ipAddress', 'telefono', 'fechaInstalacion', 'ubicacion', 'activoInactivo', 'acciones'];

  clientes = [
    { id: 1, cc: '123456', nombre: 'Juan', apellidos: 'Perez', planMB: 'Plan 1', tipoServicio: 'Tipo A', ipAddress: '192.168.1.1', telefono: '123-456-7890', fechaInstalacion: '2023-10-13', ubicacion: 'Ubicacion 1', activoInactivo: 'Activo' },
    // Agrega más datos de clientes aquí
  ];

  clientesFiltrados = this.clientes; // Inicialmente, muestra todos los clientes

  constructor(public dialog: MatDialog) {}

  aplicarFiltro(event: any) {
    const valor = event.target.value.trim().toLowerCase();
    this.clientesFiltrados = this.clientes.filter(cliente => {
      return (
        cliente.cc.toLowerCase().includes(valor) ||
        cliente.nombre.toLowerCase().includes(valor) ||
        cliente.apellidos.toLowerCase().includes(valor) ||
        // Agrega más campos según tus necesidades
        true // Deja esta línea en caso de que no quieras aplicar más filtros
      );
    });
  }

  abrirModalAgregarUsuario() {
    const dialogRef = this.dialog.open(AgregarClienteModalComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Agrega el nuevo cliente a la lista
        this.clientes.push(result);
      }
    });
  }

  editarCliente(cliente: any) {
    // Implementa la lógica para editar un cliente aquí
  }

  eliminarCliente(cliente: any) {
    // Implementa la lógica para eliminar un cliente aquí
  }
}


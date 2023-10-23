import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { MatDialogModule } from '@angular/material/dialog'; // Importa MatDialogModule
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ClientesComponent } from './clientes/clientes.component';
import { MasterUsersComponent } from './master-users/master-users.component';
import { PlanesComponent } from './planes/planes.component';
import { AgregarClienteModalComponent } from './agregar-cliente-modal/agregar-cliente-modal.component';
import { ModalAgregarplanWlanComponent } from './modal-agregarplan-wlan/modal-agregarplan-wlan.component';
import { ModalAgregarplanFibraOpticaComponent } from './modal-agregarplan-fibra-optica/modal-agregarplan-fibra-optica.component';
import { MaterUsersModalComponent } from './mater-users-modal/mater-users-modal.component';
import { NgApexchartsModule } from 'ng-apexcharts';







@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    ClientesComponent,
    MasterUsersComponent,
    PlanesComponent,
    AgregarClienteModalComponent,
    ModalAgregarplanWlanComponent,
    ModalAgregarplanFibraOpticaComponent,
    MaterUsersModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    CommonModule,
    MatTableModule,
    MatInputModule,
    FormsModule, // Agrega FormsModule
    MatDialogModule,
    NgApexchartsModule, // Agrega MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

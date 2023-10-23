import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { MasterUsersComponent } from './master-users/master-users.component';
import { PlanesComponent } from './planes/planes.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'master-users', component: MasterUsersComponent },
  { path: 'planes', component: PlanesComponent },
  // Otras rutas aquí
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

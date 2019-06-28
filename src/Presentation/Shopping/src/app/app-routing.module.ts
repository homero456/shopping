import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { AppComponent } from './app.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';

const routes: Routes = [
  
  { path: 'add-emp', component: AddEmpComponent },
  { path: 'list-emp', component: ListEmployeeComponent },
  { path: 'edit-emp', component: EditEmpComponent },
  {path : '', component : AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

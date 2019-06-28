import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from '../Services/emplyee.service';
import { Employee } from '../Models/employee';
import {Router} from "@angular/router";
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  public listEmployees:any;
  constructor(private router: Router, private serviceEmp: EmplyeeService) 
  {
      serviceEmp.getEmployee().subscribe(s=>
      {
        this.listEmployees= s;
        console.log(this.listEmployees);
      });
  }
  ngOnInit() {
  }
  deleteUser(e: Employee): void {
    this.serviceEmp.deleteEmp(e.id.toString()).subscribe(s=>
      {
        this.serviceEmp.getEmployee().subscribe(s=>
          {
            this.listEmployees= s;
            alert("Eliminado");
          });
      });    
  };
  editUser(e: Employee): void {
    localStorage.removeItem("editEmpId");
    localStorage.setItem("editEmpId", e.id.toString());
    this.router.navigate(['edit-emp']);
  };
  addUser(): void {
    this.router.navigate(['add-emp']);
  };


}

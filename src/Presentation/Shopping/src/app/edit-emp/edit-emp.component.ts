import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee';
import {Router} from "@angular/router";
import { EmplyeeService } from '../Services/emplyee.service';
@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  public emp:Employee;
  constructor(private router: Router,private serviceEmp: EmplyeeService) { }

  ngOnInit() {
    this.emp = new Employee();
    let empId = localStorage.getItem("editEmpId");
    this.serviceEmp.getEmployeeId(empId).subscribe(s=>
      {
        console.log(s);
        this.emp.id = s.id;
        this.emp.Name = s.name;
        this.emp.Telephone=s.telephone;
        this.emp.Address = s.address;        
      });
  }  
  onSubmit()
  {    
    this.serviceEmp.editEmp(this.emp).subscribe(s=>
      {
        alert("edit Employeed");
        this.router.navigate(['list-emp']);
      });
  }
}

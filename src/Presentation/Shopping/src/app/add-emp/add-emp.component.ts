import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from '../Services/emplyee.service';
import { Employee } from '../Models/employee';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  public emp:Employee;
  constructor(private router: Router,private serviceEmp: EmplyeeService) { }
  addForm: FormGroup;
  ngOnInit() {
    this.emp= new Employee();
  }


  onSubmit()
  {
    
    this.serviceEmp.saveEmp(this.emp).subscribe(s=>
      {
        alert("Add Employeed");
        this.router.navigate(['list-emp']);
      });
  }
}

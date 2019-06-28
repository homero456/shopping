import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from './Services/emplyee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {
  title = 'Shopping';
  public listEmployees:any;
  constructor(private serviceEmp: EmplyeeService) 
  {
      serviceEmp.getEmployee().subscribe(s=>
      {
        this.listEmployees= s;
        console.log(this.listEmployees);
      });
  }
  
  ngOnInit() 
  {

  }
  
  
 

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public empService:EmployeeService, public toast:ToastrService) { }
  @ViewChild(EmployeeFormComponent) emp:EmployeeFormComponent;
  ngOnInit(): void {
    this.empService.getEmployee().subscribe(data=>{
      this.empService.listEmployee=data;
    });
  }

  populateEmployee(selectedEmployee:Employee)
  {
    console.log(selectedEmployee);
      this.empService.employeeData=selectedEmployee;
      if(this.emp.isSlide==='off')
      {
        this.emp.hideShowSlide();
      }
  }

  delete(id:number)
  {
    if(confirm('Are u really want to delete this record?'))
    { 
        this.empService.deleteEmployee(id).subscribe(data=>{
          this.empService.getEmployee().subscribe(data=>{
            this.empService.listEmployee=data;
            this.toast.error('Record deleted');
          });
        },
        err=>{
          console.log('Record not deleted.');
        })
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Grade } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-salary',
  templateUrl: './update-salary.component.html',
  styleUrls: ['./update-salary.component.css']
})
export class UpdateSalaryComponent implements OnInit {

  constructor(public empService:EmployeeService,public toast:ToastrService) { }

  ngOnInit(): void {
  }

  submit(salary:number,sUpdate:NgForm)
  {
    this.empService.updateSalary(salary).subscribe(d=>
      {
        this.resetForm(sUpdate);
        this.refreshData();
        this.toast.warning('Salary Updated');
      });

  }
  resetForm(sUpdate:NgForm)
  {
    sUpdate.form.reset();
      this.empService.salaryData= new Grade();
  }

  refreshData()
  {
    this.empService.getEmployee().subscribe(res=>{
          this.empService.listEmployee=res;
      });
    }

   
}

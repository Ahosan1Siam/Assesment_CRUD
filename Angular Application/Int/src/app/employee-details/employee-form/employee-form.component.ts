import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(public empService:EmployeeService, public toast:ToastrService) { }
  @ViewChild('checkbox1') checkBox:ElementRef;
  isSlide:string='off';
  ngOnInit(): void {
    this.empService.getGrade().subscribe(data=>
      {
        this.empService.listGrade=data;
      })
  }
  submit(form:NgForm)
  {
    if(this.empService.employeeData.id==0)
    {
      this.insertEmployee(form);
    }
    else
    {
      this.updateEmployee(form);
    }

  }
  insertEmployee(myForm:NgForm)
  {
    this.empService.saveEmployee().subscribe(d=>{
      this.resetForm(myForm);
      this.refreshData();
      this.toast.success('Success','Record Saved');
    });

  }

  updateEmployee(myForm:NgForm)
  {
    this.empService.updateEmployee().subscribe(d=>{
      this.resetForm(myForm);
      this.refreshData();
      this.toast.warning('Success','Record Updated');
    });

  }

  resetForm(myForm:NgForm)
  {
      myForm.form.reset();
      this.empService.employeeData= new Employee();
      this.hideShowSlide();
  
  }


  refreshData()
  {
    this.empService.getEmployee().subscribe(res=>{
          this.empService.listEmployee=res;
      });
  }

  hideShowSlide()
  {
    if(this.checkBox.nativeElement.checked)
    {
      this.checkBox.nativeElement.checked=false;
      this.isSlide='off';
    }
    else
    {
      this.checkBox.nativeElement.checked=true;
      this.isSlide='on';
    }
  }

}

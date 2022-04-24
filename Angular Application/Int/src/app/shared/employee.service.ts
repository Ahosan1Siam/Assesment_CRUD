import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Employee, Grade } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private myhttp:HttpClient) { }
  employeeUrl:string='https://localhost:44313/api/Employee';
  gradeUrl:string='https://localhost:44313/api/Grade';
  listEmployee:Employee[]=[];
  listGrade:Grade[]=[];

  employeeData:Employee = new Employee();
  salaryData:Grade= new Grade();

  saveEmployee()
  {
    return this.myhttp.post(this.employeeUrl,this.employeeData);
  }

  updateEmployee()
  {
    return this.myhttp.put(`${this.employeeUrl}/${this.employeeData.id}`,this.employeeData);
  }

  getEmployee():Observable<Employee[]>
  {
    return this.myhttp.get<Employee[]>(this.employeeUrl);
  }
  getGrade():Observable<Grade[]>
  {
    return this.myhttp.get<Grade[]>(this.gradeUrl);
  }

  deleteEmployee(id:number)
  {
    return this.myhttp.delete(`${this.employeeUrl}/${id}`);
  }

  updateSalary(salary:number)
  {
     return this.myhttp.put(`${this.gradeUrl}/${salary}`,this.salaryData);
  }
}

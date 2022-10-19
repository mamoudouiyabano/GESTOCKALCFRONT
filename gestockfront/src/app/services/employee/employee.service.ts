import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeDto } from 'src/gs-api/src/models';
import { Gestockv1employesService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private employee: Gestockv1employesService) { }

  saveEmploye(EmployeDto: EmployeDto): Observable<any> {
    
    return this.employee.save(EmployeDto);
  }

  updateEmploye(EmployeDto: EmployeDto): Observable<any> {
    
    return this.employee.update(EmployeDto);
  }

  findAll(): Observable<EmployeDto[]> {
    return this.employee.findAll();
  }

  findById(idEmploye: number): Observable<EmployeDto> {
    return this.employee.findById(idEmploye);
  }

  findByCode(codeEmploye: string): Observable<EmployeDto> {
    return this.employee.findByCode(codeEmploye);
  }

  delete(idEmploye?: number) : Observable<any> {

    if(idEmploye!== undefined) {
      return this.employee.delete(idEmploye);

    }
    
    return of();

  }
}

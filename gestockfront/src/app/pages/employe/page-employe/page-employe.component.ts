import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { EmployeDto } from 'src/gs-api/src/models';
import { ErrorDto } from 'src/gs-api/src/models/errorDto';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-page-employe',
  templateUrl: './page-employe.component.html',
  styleUrls: ['./page-employe.component.scss']
})
export class PageEmployeComponent implements OnInit {

  currentElementPerPage: any = '';

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  listEmployes: Array<EmployeDto> = [];
  selectedEmpIdToDelete? = -1;
  errorMsgs = '';
  code = '';

  errorMsg: any = {};
  errorDto: ErrorDto = {};

  constructor(private router: Router, private employeService: EmployeeService) { 
    this.InitializeElement();
  }

  ngOnInit(): void {
    this.findAllEmployes();
  }

  nouvelEmploye(): void {
    this.router.navigate(['nouvelemploye']);
  }

  transaction(): void {
    this.router.navigate(['transaction']);
  }

  findAllEmployes():void {
    this.employeService.findAll()
    .subscribe(
      (data) => {
          this.listEmployes = data;
          // initiate our data table
          
     
      }
    );

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.findAllEmployes();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.findAllEmployes();
  }


  modifierEmploye(id: any): void {
    this.router.navigate(['nouvelemploye', id]);
  }

  selectEmpPourSupprimer(id?: number): void {
    this.selectedEmpIdToDelete = id;
  }

  annulerSuppressionEmp(): void {
    this.selectedEmpIdToDelete = -1;
  }

  confirmerEtSupprimerEmp(): void {
    if(this.selectedEmpIdToDelete !== -1) {
      console.log('okkokookk');
      this.employeService.delete(this.selectedEmpIdToDelete)
      .subscribe( res => {
        this.findAllEmployes();
      }, error => {
        this.errorMsgs = error.error.message;
      });
    }
    

  }


  nouvelExport(): void {
    const fileName = 'employe.xlsx';
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.listEmployes);
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'test');

		XLSX.writeFile(wb, fileName);
  }


  
  ElementPerPage(element: any): void {
 
    localStorage.setItem('elementPerPage', element);
    this.currentElementPerPage = localStorage.getItem('elementPerPage');
    this.tableSize = this.currentElementPerPage;
    console.log(element);
    window.location.reload();
  }

InitializeElement(): void {

  if(localStorage.getItem('elementPerPage')) {
    this.currentElementPerPage = localStorage.getItem('elementPerPage');
    this.tableSize = this.currentElementPerPage;
   
  } else {
    this.currentElementPerPage = '10';
    this.tableSize = this.currentElementPerPage;
  }

}


search() : void {
  if(this.code.length ===0) {
   this.findAllEmployes();
  }
  this.listEmployes = this.listEmployes
  .filter(emp => emp.codeEmploye?.startsWith(this.code));

 }



}

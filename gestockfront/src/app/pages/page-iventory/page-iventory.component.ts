import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MvtService } from 'src/app/services/mvt/mvt.service';
import { MvtStkDto } from 'src/gs-api/src/models';
import { ErrorDto } from 'src/gs-api/src/models/errorDto';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-page-iventory',
  templateUrl: './page-iventory.component.html',
  styleUrls: ['./page-iventory.component.scss']
})
export class PageIventoryComponent implements OnInit {


  currentElementPerPage: any = '';

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  listIventory: Array<MvtStkDto> = [];

  errorMsgs = '';
  code = '';

  errorMsg: any = {};
  errorDto: ErrorDto = {};


  constructor(private router: Router, private iventoryService: MvtService ) {
  this.InitializeElement();}

  ngOnInit(): void {

    this.findAllIventory();
  }


  nouvelItem(): void {
    this.router.navigate(['nouvelitem']);
  }

  findAllIventory():void {
    this.iventoryService.findAll()
    .subscribe(
      (data) => {
          this.listIventory = data;
          // initiate our data table


      }
    );

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.findAllIventory();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.findAllIventory();
  }

  nouvelExport(): void {
    const fileName = 'inventory.xlsx';
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.listIventory);
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
   this.findAllIventory();
  }
  this.listIventory = this.listIventory
  .filter(art => art.item?.codeItem?.startsWith(this.code));

 }


}
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { event } from 'jquery';
import { Subject } from 'rxjs';
import { CategoryService } from 'src/app/services/category/category.service';
import { CategoryDto } from 'src/gs-api/src/models';
import { ErrorDto } from 'src/gs-api/src/models/errorDto';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-page-category-item',
  templateUrl: './page-category-item.component.html',
  styleUrls: ['./page-category-item.component.scss']
})
export class PageCategoryItemComponent implements OnInit {

  currentElementPerPage: any = '';

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  listCatgeories: Array<CategoryDto> = [];
  selectedCatIdToDelete? = -1;
  errorMsgs = '';
  code = '';

  errorMsg: any = {};
  errorDto: ErrorDto = {};

  constructor(private router: Router, private categoryService: CategoryService) { 

    this.InitializeElement();

  }

  ngOnInit(): void {
  
    this.findAllCategories();
     
  }

  

  findAllCategories():void {
    this.categoryService.findAll()
    .subscribe(
      (data) => {
          this.listCatgeories = data;
          // initiate our data table
          
     
      }
    );

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.findAllCategories();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.findAllCategories();
  }

  nouvelCategory(): void {
    this.router.navigate(['nouvelcategory']);
  }

  modifierCategory(id: any): void {
    this.router.navigate(['nouvelcategory', id]);
  }

  selectCatPourSupprimer(id?: number): void {
    this.selectedCatIdToDelete = id;
  }

  annulerSuppressionCat(): void {
    this.selectedCatIdToDelete = -1;
  }

  confirmerEtSupprimerCat(): void {
    if(this.selectedCatIdToDelete !== -1) {
      console.log('okkokookk');
      this.categoryService.delete(this.selectedCatIdToDelete)
      .subscribe( res => {
        this.findAllCategories();
      }, error => {
        this.errorMsgs = error.error.message;
      });
    }
    

  }

  nouvelImport(): void {
    if(localStorage.getItem('uploadedData')) {

        let data = JSON.parse(localStorage.getItem('uploadedData') as string)
        console.log(data);
        data.forEach( (element:any) => {

          this.categoryService.saveCategory(element)
          .subscribe(
            (data) => {
              if(data.id != null) {
                //this.router.navigate(['category']);
              }
      
              else {
                
                this.errorDto = data
                console.log(this.errorDto.errors)
              
              }
            }
          );
         
      });

      localStorage.removeItem('uploadedData');
      this.findAllCategories();
      window.location.reload();

 
    }
  }

  nouvelExport(): void {
    const fileName = 'category.xlsx';
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.listCatgeories);
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
   this.findAllCategories();
  }
  this.listCatgeories = this.listCatgeories
  .filter(cat => cat.code?.startsWith(this.code) || cat.designation?.startsWith(this.code));

 }



}

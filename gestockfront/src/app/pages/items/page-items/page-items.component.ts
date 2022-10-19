import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items/items.service';
import { ItemDto } from 'src/gs-api/src/models';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-page-items',
  templateUrl: './page-items.component.html',
  styleUrls: ['./page-items.component.scss']
})
export class PageItemsComponent implements OnInit {

  currentElementPerPage: any = '';

  listItems: Array<ItemDto> = [];
  errorMsg = '';
  selectedCatIdToDelete? = -1;
  errorMsgs = '';
  code = '';


  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  constructor(private router: Router, private itemService:ItemsService) { 
    this.InitializeElement();
   }

  ngOnInit(): void {
    this.findListItems();
  }

  findListItems(): void {
    this.itemService.findAll()
    .subscribe( items => {
      this.listItems = items;
      
    });
  }

  nouvelItem(): void {
    this.router.navigate(['nouvelitem']);
  }

  modifierItem(id: any): void {
    this.router.navigate(['nouvelitem', id]);
  }

  selectItemPourSupprimer(id?: number): void {
    this.selectedCatIdToDelete = id;
  }

  annulerSuppressionItem(): void {
    this.selectedCatIdToDelete = -1;
  }

  confirmerEtSupprimerItem(): void {
    if(this.selectedCatIdToDelete !== -1) {
      console.log('okkokookk');
      this.itemService.delete(this.selectedCatIdToDelete)
      .subscribe( res => {
        this.findListItems();
      }, error => {
        this.errorMsgs = error.error.message;
      });
    }
    

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.findListItems();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.findListItems();
  }


  nouvelExport(): void {
    const fileName = 'item.xlsx';
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.listItems);
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
   this.findListItems();
  }
  this.listItems = this.listItems
  .filter(item => item.codeItem?.startsWith(this.code) || item.designation?.startsWith(this.code));

 }




  


}

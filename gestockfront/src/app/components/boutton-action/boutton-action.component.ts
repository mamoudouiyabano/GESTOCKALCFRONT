import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageCategoryItemComponent } from 'src/app/pages/category/page-category-item/page-category-item.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent implements OnInit {

  logoUrl: string = 'assets/logoExcel.png';
  convertedJson?: string;

 
  @Input()
  isNouveauVisible = true;
  @Input()
  isExporterVisible = true;
  @Input()
  isImporterVisible = true;
  @Input()
  isTransactionVisible = true;

  @Output()
  clickEvent = new EventEmitter();

  @Output()
  clickEvent1 = new EventEmitter();

  @Output()
  clickImportEvent = new EventEmitter();

  @Output()
  clickExportEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }

  bouttonTransactionClick(): void {
    this.clickEvent1.emit();
  }

  bouttonImportClick(): void {
    this.clickImportEvent.emit();
  }

  bouttonExportClick(): void {
    this.clickExportEvent.emit();
  }

  fileUpload(event: any) {
    console.log(event.target.files);
    const selectedFile =  event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event:any) => {
      console.log(event);
      let binaryData = event.target.result;
      let uploadedData = XLSX.read(binaryData, {type: 'binary'});
      uploadedData.SheetNames.forEach(sheet => {
        const data = XLSX.utils.sheet_to_json(uploadedData.Sheets[sheet]);
        //console.log(data);
        this.convertedJson = JSON.stringify(data,undefined,4);
        console.log(this.convertedJson);
        localStorage.setItem('uploadedData',this.convertedJson);
    
      })
      //console.log(uploadedData)
    }    
  }


}

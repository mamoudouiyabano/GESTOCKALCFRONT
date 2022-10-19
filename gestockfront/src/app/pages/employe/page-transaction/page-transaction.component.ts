import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CmdEmployeService } from 'src/app/services/cmdEmploye/cmd-employe.service';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { CommandeEmployeDto, EmployeDto, ItemDto, LigneCmdEmployeDto } from 'src/gs-api/src/models';
import { ErrorDto } from 'src/gs-api/src/models/errorDto';
import { ItemsService } from 'src/app/services/items/items.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-page-transaction',
  templateUrl: './page-transaction.component.html',
  styleUrls: ['./page-transaction.component.scss']
})
export class PageTransactionComponent implements OnInit {

  commandeEmployeDto: CommandeEmployeDto = {};

  employeDto: EmployeDto = {};
  errorMsg: any = {};
  errorDto: ErrorDto = {};
  codeEmploye = '';

  listEmployes: Array<EmployeDto> = [];
  searchedEmploye: EmployeDto = {};
  employeNotYetSelected = false;

  searchedItem: ItemDto = {};
  listItem: Array<ItemDto> = [];
  itemErrorMsg = '';
  codeItem = '';
  quantite = '';
  totalCommande= 0;
  itemNotYetSelected= false;
  codeCommande='';

  lignesCommande : Array<LigneCmdEmployeDto> = [];


  currentElementPerPage: any = '';

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  listLigneTransaction: Array<LigneCmdEmployeDto> = [];

  errorMsgs = '';
  code = '';



  constructor(private router: Router,private activatedRoute: ActivatedRoute,
    private commandeEmployeService:CmdEmployeService, private employeService: EmployeeService, private itemService:ItemsService) {
      this.InitializeElement();
     }

  ngOnInit(): void {
  this.findAllEmployes();
  this.findAllItems();
  this.findAllLigneTransaction();

  }


  back(): void {
    this.router.navigate(['employes']);
  }

  findAllLigneTransaction():void {
    this.commandeEmployeService.findAllLigneCmd()
    .subscribe(
      (data) => {
          this.listLigneTransaction = data;
          // initiate our data table


      }
    );

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.findAllLigneTransaction();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.findAllLigneTransaction();
  }

  nouvelExport(): void {
    const fileName = 'lignetransaction.xlsx';
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.listLigneTransaction);
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
   this.findAllLigneTransaction();
  }
  this.listLigneTransaction = this.listLigneTransaction
  .filter(art => art.item?.designation?.startsWith(this.code));

 }




  saveTransaction() {
    this.commandeEmployeDto.employe = this.searchedEmploye;
    this.commandeEmployeDto.commandeLivree = true;
    this.commandeEmployeDto.code = this.generateCodeCmd();
    this.commandeEmployeDto.ligneCmdEmployeDtos = this.lignesCommande;

    this.commandeEmployeService.saveCmd(this.commandeEmployeDto)
    .subscribe(
      (data) => {
        if(data.id != null) {
          this.router.navigate(['employes']);
        }

        else {
          
          this.errorDto = data
          console.log(this.errorDto.errors)
        
        }
      }
    );


    console.log(this.commandeEmployeDto);
  }


  findAllEmployes(): void {
    
    this.employeService.findAll()
    .subscribe(employes => {
      this.listEmployes = employes;
    });
  
}

findAllItems(): void {
    
  this.itemService.findAll()
  .subscribe(items => {
    this.listItem = items;
  });

}

searchItem() : void {
  if(this.codeItem.length ===0) {
   this.findAllItems();
  }
  this.listItem = this.listItem
  .filter(item => item.codeItem?.startsWith(this.codeItem));

 }

 selectitem(item: ItemDto): void {
  this.searchedItem = item;
  this.codeItem = item.codeItem? item.codeItem : '';
  this.itemNotYetSelected = true;
}


selectemploye(employe: EmployeDto): void {
  this.searchedEmploye = employe;
  this.commandeEmployeDto.employe= employe;
  this.employeDto.nom = employe.nom;
  this.employeDto.prenom = employe.prenom;
  this.employeDto.photo = employe.photo;
 // this.codeEmploye = employe.codeEmploye? employe.codeEmploye : '';
  this.employeNotYetSelected = true;
}



  searchEmploye() : void {
    if(this.codeEmploye.length ===0) {
     this.findAllEmployes();
    }
    this.listEmployes = this.listEmployes
    .filter(emp => emp.codeEmploye?.startsWith(this.codeEmploye));
 
   }



   ajouterLigneCommande() : void {

    const ligneCmdAlreadyExists = this.lignesCommande.find(lig => lig.item?.codeItem === this.searchedItem.codeItem);
    if(ligneCmdAlreadyExists) {
     this.lignesCommande.forEach(lig => {
      if(lig && lig.item?.codeItem === this.searchedItem.codeItem) {
        //@ts-ignore
        lig.quantite = lig.quantite + +this.quantite;
      }
     });
     this.quantite = ligneCmdAlreadyExists.quantite + this.quantite;
    } else {
            const ligneCmd: LigneCmdEmployeDto = {
        item : this.searchedItem,
        prixUnitaire:this.searchedItem.prixUnitaireHt,
        quantite: +this.quantite
  
      };
      this.lignesCommande.push(ligneCmd);
    }


      this.totalCommande = 0;
      this.lignesCommande.forEach(ligne => {
        if(ligne.prixUnitaire && ligne.quantite) {
          this.totalCommande += +ligne.prixUnitaire * +ligne.quantite;
        }
      });

      this.searchedItem = {};
      this.quantite = '';
      this.codeItem = '';
      this.itemNotYetSelected = false;
      this.findAllItems();
    

  }


  generateCodeCmd(): any {
    const num = Math.floor(Math.random() * 99) + 1
    function makecaracter(length: any) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
   charactersLength));
     }
     return result;
  }

  let code = "CMD"+ num + makecaracter(5);
  
  return code;
  }

  

}

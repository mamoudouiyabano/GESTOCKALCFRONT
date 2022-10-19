import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { UtilisateurDto } from 'src/gs-api/src/models';
import { ErrorDto } from 'src/gs-api/src/models/errorDto';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.scss']
})
export class PageUserComponent implements OnInit {

  currentElementPerPage: any = '';

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  listUtilisateurs: Array<UtilisateurDto> = [];
  selectedUserIdToDelete? = -1;
  errorMsgs = '';
  code = '';

  errorMsg: any = {};
  errorDto: ErrorDto = {};

  constructor(private router: Router, private utilisateurService: UsersService) {
    this.InitializeElement();
   }

  ngOnInit(): void {
    this.findAllUtilisateurs();
  }

  nouvelUser(): void {
    this.router.navigate(['nouveluser']);
  }

  findAllUtilisateurs():void {
    this.utilisateurService.findAll()
    .subscribe(
      (data) => {
          this.listUtilisateurs = data;
          // initiate our data table
          
     
      }
    );

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.findAllUtilisateurs();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.findAllUtilisateurs();
  }


  modifierUser(id: any): void {
    this.router.navigate(['nouveluser', id]);
  }


  
  selectUserPourSupprimer(id?: number): void {
    this.selectedUserIdToDelete = id;
  }

  annulerSuppressionUser(): void {
    this.selectedUserIdToDelete = -1;
  }

  confirmerEtSupprimerUser(): void {
    if(this.selectedUserIdToDelete !== -1) {
      console.log('okkokookk');
      this.utilisateurService.delete(this.selectedUserIdToDelete)
      .subscribe( res => {
        this.findAllUtilisateurs();
      }, error => {
        this.errorMsgs = error.error.message;
      });
    }
    

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
   this.findAllUtilisateurs();
  }
  this.listUtilisateurs = this.listUtilisateurs
  .filter(user => user.codeEmploye?.startsWith(this.code));

 }


}

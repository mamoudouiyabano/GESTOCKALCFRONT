import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { UsersService } from 'src/app/services/users/users.service';
import { EmployeDto, UtilisateurDto } from 'src/gs-api/src/models';
import { ErrorDto } from 'src/gs-api/src/models/errorDto';

@Component({
  selector: 'app-page-nouveluser',
  templateUrl: './page-nouveluser.component.html',
  styleUrls: ['./page-nouveluser.component.scss']
})
export class PageNouveluserComponent implements OnInit {

  utilisateurDto: UtilisateurDto = {};
  errorMsg: any = {};
  errorDto: ErrorDto = {};
  codeEmploye = '';

  listEmployes: Array<EmployeDto> = [];
  searchedEmploye: EmployeDto = {};

  employeNotYetSelected = false;

  file: File | null = null;
  titles: any | null = '';
  imgUrl: string | ArrayBuffer = 'assets/user.png';

  constructor(private router: Router,private activatedRoute: ActivatedRoute,
    private utilisateurService:UsersService, private employeService: EmployeeService) { }

    ngOnInit(): void {
      const idUtilisateur = this.activatedRoute.snapshot.params['idUtilisateur'];
      if(idUtilisateur) {
        this.utilisateurService.findById(idUtilisateur)
        .subscribe( user => {
          this.utilisateurDto = user;
        });
      }
    }

  back(): void {
    this.router.navigate(['users']);
  }


  saveUtilisateur() {
    console.log(this.utilisateurDto);
     if(this.activatedRoute.snapshot.params['idUtilisateur']) {
      this.utilisateurService.updateUser(this.utilisateurDto)
      .subscribe(
        (data) => {
  
          if(data.id != null) {
            this.router.navigate(['users']);
          }
  
          else {
            
            this.errorDto = data
            console.log(this.errorDto.errors)
          
          }
  
        }
      );
    }
    else {
      this.utilisateurService.saveUser(this.utilisateurDto)
      .subscribe(
        (data) => {
  
          if(data.id != null) {
            this.router.navigate(['users']);
          }
  
          else {
            
            this.errorDto = data
            console.log(this.errorDto.errors)
          
          }
  
        }
      );
    } 
    
  }

  findAllEmployes(): void {
    
    this.employeService.findAll()
    .subscribe(employes => {
      this.listEmployes = employes;
    });
  
} 


selectemploye(employe: EmployeDto): void {
  this.searchedEmploye = employe;
  this.utilisateurDto.nom = employe.nom;
  this.utilisateurDto.codeEmploye = employe.codeEmploye;
  this.utilisateurDto.prenom = employe.prenom;
  this.utilisateurDto.dateEmbauche = employe.dateEmbauche;
  this.utilisateurDto.email = employe.email;
  this.utilisateurDto.photo = employe.photo;
  this.codeEmploye = employe.codeEmploye? employe.codeEmploye : '';
  this.employeNotYetSelected = true;
}



  searchEmploye() : void {
    if(this.codeEmploye.length ===0) {
     this.findAllEmployes();
    }
    this.listEmployes = this.listEmployes
    .filter(emp => emp.codeEmploye?.startsWith(this.codeEmploye));
 
   }

}

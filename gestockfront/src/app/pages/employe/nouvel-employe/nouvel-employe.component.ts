import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { EmployeDto } from 'src/gs-api/src/models';
import { ErrorDto } from 'src/gs-api/src/models/errorDto';

@Component({
  selector: 'app-nouvel-employe',
  templateUrl: './nouvel-employe.component.html',
  styleUrls: ['./nouvel-employe.component.scss']
})
export class NouvelEmployeComponent implements OnInit {

  employeDto: EmployeDto = {};
  errorMsg: any = {};
  errorDto: ErrorDto = {};

  file: File | null = null;
  titles: any | null = '';
  imgUrl: string | ArrayBuffer = 'assets/user.png';

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private employeService: EmployeeService) { }

    ngOnInit(): void {
      const idEmploye = this.activatedRoute.snapshot.params['idEmploye'];
      if(idEmploye) {
        this.employeService.findById(idEmploye)
        .subscribe( emp => {
          this.employeDto = emp;
        });
      }
    }

  back(): void {
    this.router.navigate(['employes']);
  }


  saveEmploye() {
    console.log(this.employeDto);
    if(this.activatedRoute.snapshot.params['idEmploye']) {
      this.employeService.updateEmploye(this.employeDto)
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
    }
    else {
      this.employeService.saveEmploye(this.employeDto)
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
    }
    
  }


  onFileInput(files: FileList | null): void {
    if(files) {
      this.file = files.item(0);
      if(this.file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
       
        fileReader.onload = (event) => {
          if(fileReader.result) {
            this.imgUrl = fileReader.result;
            let base64 = event.target?.result;
            //console.log(base64);
            this.employeDto.photo =  event.target?.result;
           
            
          }
        }
      };
    }
    }
      handleInputChange(file: any): EmployeDto {
        throw new Error('Method not implemented.');
      }

}

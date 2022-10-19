import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { changerMotDePasseUtilisateurDto, UtilisateurDto } from 'src/gs-api/src/models';
import { ErrorDto } from 'src/gs-api/src/models/errorDto';

@Component({
  selector: 'app-page-setting',
  templateUrl: './page-setting.component.html',
  styleUrls: ['./page-setting.component.scss']
})
export class PageSettingComponent implements OnInit {

  utilisateurInfo: UtilisateurDto = {};


  changerMotDepasseDto: changerMotDePasseUtilisateurDto = {};
  errorMsg: any = {};
  errorDto: ErrorDto = {};

  constructor(private route:Router, private userService: UsersService) { }

  ngOnInit(): void {
    this.utilisateurInfo = this.userService.getConnectedUser();
  }


  back(): void {
    this.route.navigate(['statistiques']);
  }

  save() {
    this.changerMotDepasseDto.id = this.utilisateurInfo.id;
    this.userService.changeUserPass(this.changerMotDepasseDto)
     .subscribe(
      (data) => {
        if(data.id != null) {
          this.route.navigate(['dashboard']);
        }

        else {
          
          this.errorDto = data
          console.log(this.errorDto.errors)
        
        }
      }
    );
   
    console.log(this.changerMotDepasseDto);
  } 
  

}

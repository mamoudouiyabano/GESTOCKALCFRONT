import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthenticationResquest } from 'src/gs-api/src/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authenticationRequest: AuthenticationResquest = {};
  errorMessage = '';

  logoUrl: string = 'assets/alc.jpeg';
  

  constructor(private userService: UsersService ,  private router:Router) { }

  ngOnInit(): void {
  }


  login() {
    this.userService.login(this.authenticationRequest).subscribe((data) => {
      
      if(data.accessToken) {
        this.userService.setJwtToken(data);
        this.userService.getUserByEmail(this.authenticationRequest.login)
        .subscribe((data) => {
          this.userService.setUtilisateurInfo(data);
        });
        this.router.navigate(['statistiques']);
      }
      else {
        this.errorMessage = 'login et / ou mot de passe incorrecte'
      }
  
    }, error => {
      console.log(error);
    
    });
  }

  

}

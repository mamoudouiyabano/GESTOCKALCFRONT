import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationResponse, AuthenticationResquest, changerMotDePasseUtilisateurDto, UtilisateurDto } from 'src/gs-api/src/models';
import { Gestockv1utilisateursService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  rootUrl="http://localhost:8084";
  

  constructor(private user: Gestockv1utilisateursService,
    private http:HttpClient,
    private router:Router) { }


    login(authenticationResquest: AuthenticationResquest): Observable<AuthenticationResponse> {
      return this.http.post('http://localhost:8084/gestock/v1/auth/authenticate', authenticationResquest);
        
    }

    getUserByEmail(email?: string): Observable<UtilisateurDto> {
      if(email!== undefined) {
        return this.http.get(`http://localhost:8084/gestock/v1/utilisateurs/email/${email}`);

      }
      return of();
    }

    
    setJwtToken(authenticationResponse: AuthenticationResponse):void {
      localStorage.setItem('accessToken', JSON.stringify(authenticationResponse));
    }

    setUtilisateurInfo(utilisateur: UtilisateurDto): void {
      localStorage.setItem('utilisateurInfo', JSON.stringify(utilisateur));
    }

    getConnectedUser(): UtilisateurDto {
      if (localStorage.getItem('utilisateurInfo')) {
        return JSON.parse(localStorage.getItem('utilisateurInfo') as string)
      }
      return {}
    }

        
        isUserLoggedAndAccessTokenValid():boolean {
          if(localStorage.getItem('accessToken')) {
            // TODO il faut verifier si le access token est valid
            return true;
          }
          this.router.navigate(['login'])
          return false
        }

  saveUser(utilisateurDto: UtilisateurDto): Observable<any> {
    
    return this.user.save(utilisateurDto);
  }

  updateUser(UtilisateurDto: UtilisateurDto): Observable<any> {
    
    return this.user.update(UtilisateurDto);
  }

  changeUserPass(changerMotDePasseUtilisateurDto: changerMotDePasseUtilisateurDto): Observable<any> {
    
    return this.user.changerMotDePasse(changerMotDePasseUtilisateurDto);
  }

  findAll(): Observable<UtilisateurDto[]> {
    return this.user.findAll();
  }

  findById(idUtilisateur: number): Observable<UtilisateurDto> {
    return this.user.findById(idUtilisateur);
  }


  delete(idUtilisateur?: number) : Observable<any> {

    if(idUtilisateur!== undefined) {
      return this.user.delete(idUtilisateur);

    }
    
    return of();

  }

}

/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable, Observable as __Observable, of } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UtilisateurDto } from '../models/utilisateur-dto';
import { changerMotDePasseUtilisateurDto } from '../models';
@Injectable({
  providedIn: 'root',
})
class Gestockv1utilisateursService extends __BaseService {
  static readonly findAllPath = '/gestock/v1/utilisateurs/all';
  static readonly savePath = '/gestock/v1/utilisateurs/create';
  static readonly findByIdPath = '/gestock/v1/utilisateurs/{idUtilisateur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * permet de chercher et renvoyer la liste des utilisateurs
   * @return la liste des utilisateurs
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/utilisateurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }
  /**
   * permet de chercher et renvoyer la liste des utilisateurs
   * @return la liste des utilisateurs
   */
  findAll(): __Observable<Array<UtilisateurDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * permet d'enregisdtrer ou modifier un utilisateur
   * @param body undefined
   * @return L'objet utilisateur cree
   */
  saveResponse(body?: UtilisateurDto): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestock/v1/utilisateurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * permet d'enregisdtrer ou modifier un utilisateur
   * @param body undefined
   * @return L'objet utilisateur cree
   */
  save(body?: UtilisateurDto): __Observable<UtilisateurDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * permet de chercher  un utilisateur par id
   * @param idUtilisateur undefined
   * @return L'utilisateur a ete trouve dans la bd
   */
  findByIdResponse(idUtilisateur: number): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/utilisateurs/${idUtilisateur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * permet de chercher  un utilisateur par id
   * @param idUtilisateur undefined
   * @return L'utilisateur a ete trouve dans la bd
   */
  findById(idUtilisateur: number): __Observable<UtilisateurDto> {
    return this.findByIdResponse(idUtilisateur).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }


  delete(idUtilisateur?: number): Observable<any>  {
    if(idUtilisateur!== undefined) {
      return this.http.delete( this.rootUrl +`/gestock/v1/utilisateurs/delete/${idUtilisateur}`);

    }
    return of();
  }

  update(utilisateurDto:UtilisateurDto) {
    return this.http.post( this.rootUrl +`/gestock/v1/utilisateurs/update`, utilisateurDto);
  }

  changerMotDePasse(changerMotDePasseUtilisateurDto:changerMotDePasseUtilisateurDto) {
    return this.http.post( this.rootUrl +`/gestock/v1/utilisateurs/changermotdepasse`, changerMotDePasseUtilisateurDto);
  }


}

module Gestockv1utilisateursService {
}

export { Gestockv1utilisateursService }

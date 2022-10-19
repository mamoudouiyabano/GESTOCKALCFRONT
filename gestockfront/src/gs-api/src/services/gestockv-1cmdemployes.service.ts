/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable, Observable as __Observable, of } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeEmployeDto } from '../models/commande-employe-dto';

@Injectable({
  providedIn: 'root',
})
class Gestockv1cmdemployesService extends __BaseService {
  static readonly deleteItemPath = '/gestock/v1/cmdemployes/delete/item/{idCommande}/{idLigneCommande}';
  static readonly updateEtatCommandePath = '/gestock/v1/cmdemployes/update/etat/{idCommande}/{etatCommande}';
  static readonly updateQuantiteCommandePath = '/gestock/v1/cmdemployes/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * permet de supprimer un item ou une ligne de commande
   * @param params The `Gestockv1cmdemployesService.DeleteItemParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return Suprression effectuee
   */
  deleteItemResponse(params: Gestockv1cmdemployesService.DeleteItemParams): __Observable<__StrictHttpResponse<CommandeEmployeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestock/v1/cmdemployes/delete/item/${params.idCommande}/${params.idLigneCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeEmployeDto>;
      })
    );
  }
  /**
   * permet de supprimer un item ou une ligne de commande
   * @param params The `Gestockv1cmdemployesService.DeleteItemParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return Suprression effectuee
   */
  deleteItem(params: Gestockv1cmdemployesService.DeleteItemParams): __Observable<CommandeEmployeDto> {
    return this.deleteItemResponse(params).pipe(
      __map(_r => _r.body as CommandeEmployeDto)
    );
  }

  /**
   * permet de modifier l'etat d'une commande employe
   * @param params The `Gestockv1cmdemployesService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return L'etat de la commande a ete modifiee
   */
  updateEtatCommandeResponse(params: Gestockv1cmdemployesService.UpdateEtatCommandeParams): __Observable<__StrictHttpResponse<CommandeEmployeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestock/v1/cmdemployes/update/etat/${params.idCommande}/${params.etatCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeEmployeDto>;
      })
    );
  }
  /**
   * permet de modifier l'etat d'une commande employe
   * @param params The `Gestockv1cmdemployesService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return L'etat de la commande a ete modifiee
   */
  updateEtatCommande(params: Gestockv1cmdemployesService.UpdateEtatCommandeParams): __Observable<CommandeEmployeDto> {
    return this.updateEtatCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeEmployeDto)
    );
  }

  /**
   * permet de modifier la quantite d'une commande employe
   * @param params The `Gestockv1cmdemployesService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return L'etat de la commande a ete modifiee
   */
  updateQuantiteCommandeResponse(params: Gestockv1cmdemployesService.UpdateQuantiteCommandeParams): __Observable<__StrictHttpResponse<CommandeEmployeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestock/v1/cmdemployes/update/quantite/${params.idCommande}/${params.idLigneCommande}/${params.quantite}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeEmployeDto>;
      })
    );
  }
  /**
   * permet de modifier la quantite d'une commande employe
   * @param params The `Gestockv1cmdemployesService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return L'etat de la commande a ete modifiee
   */
  updateQuantiteCommande(params: Gestockv1cmdemployesService.UpdateQuantiteCommandeParams): __Observable<CommandeEmployeDto> {
    return this.updateQuantiteCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeEmployeDto)
    );
  }

  
  saveCommande(commandeEmployeDto:CommandeEmployeDto) {
    return this.http.post('http://localhost:8084/gestock/v1/cmdemployes/create', commandeEmployeDto);
  }

  findAll(): any{
    return this.http.get( this.rootUrl +`gestock/v1/cmdemployes/all`);

}

findById(idCommande?: number): Observable<CommandeEmployeDto> {
  if(idCommande!== undefined) {
    return this.http.get( this.rootUrl +`/gestock/v1/cmdemployes/${idCommande}`);

  }
  return of();
}

findByCodeCmde(code?: number): Observable<CommandeEmployeDto> {
  if(code!== undefined) {
    return this.http.get( this.rootUrl +`/gestock/v1/cmdemployes/code/${code}`);

  }
  return of();
}

findAllLignesCmdEmployeByCmdEmployeId(idCommande?: number): Observable<CommandeEmployeDto> {
  if(idCommande!== undefined) {
    return this.http.get( this.rootUrl +`/gestock/v1/cmdemployes/lignesCommande/${idCommande}`);

  }
  return of();
}

findAllLigneCmdes(): any{
  return this.http.get('http://localhost:8084/gestock/v1/cmdemployes/allLignesCmde');

}

delete(idCommande?: number): Observable<any>  {
  if(idCommande!== undefined) {
    return this.http.delete( this.rootUrl +`/gestock/v1/cmdemployes/delete/${idCommande}`);

  }
  return of();
}


}

module Gestockv1cmdemployesService {

  /**
   * Parameters for deleteItem
   */
  export interface DeleteItemParams {
    idLigneCommande: number;
    idCommande: number;
  }

  /**
   * Parameters for updateEtatCommande
   */
  export interface UpdateEtatCommandeParams {
    idCommande: number;
    etatCommande: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  }

  /**
   * Parameters for updateQuantiteCommande
   */
  export interface UpdateQuantiteCommandeParams {
    quantite: number;
    idLigneCommande: number;
    idCommande: number;
  }


}

export { Gestockv1cmdemployesService }

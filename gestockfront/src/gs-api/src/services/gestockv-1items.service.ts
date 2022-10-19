/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable, Observable as __Observable, of } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ItemDto } from '../models/item-dto';
import { LigneCmdEmployeDto } from '../models/ligne-cmd-employe-dto';
@Injectable({
  providedIn: 'root',
})
class Gestockv1itemsService extends __BaseService {
  static readonly savePath = '/gestock/v1/items/create';
  static readonly findHistoriqueCommandeEmployePath = '/gestock/v1/items/historique/commandeemploye/{iditem}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * permet d'enregisdtrer ou modifier un item
   * @param body undefined
   * @return L'objet item cree
   */
  saveResponse(body?: ItemDto): __Observable<__StrictHttpResponse<ItemDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestock/v1/items/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ItemDto>;
      })
    );
  }
  /**
   * permet d'enregisdtrer ou modifier un item
   * @param body undefined
   * @return L'objet item cree
   */
  save(body?: ItemDto): __Observable<ItemDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as ItemDto)
    );
  }

  /**
   * permet de renvoyer la liste des commandes employe
   * @param idItem undefined
   * @return historique  commande employe
   */
  findHistoriqueCommandeEmployeResponse(idItem: number): __Observable<__StrictHttpResponse<Array<LigneCmdEmployeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/items/historique/commandeemploye/${idItem}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCmdEmployeDto>>;
      })
    );
  }
  /**
   * permet de renvoyer la liste des commandes employe
   * @param idItem undefined
   * @return historique  commande employe
   */
  findHistoriqueCommandeEmploye(idItem: number): __Observable<Array<LigneCmdEmployeDto>> {
    return this.findHistoriqueCommandeEmployeResponse(idItem).pipe(
      __map(_r => _r.body as Array<LigneCmdEmployeDto>)
    );
  }

  findAll(): any{
    return this.http.get('http://localhost:8084/gestock/v1/items/all');

}

findById(idItem?: number): Observable<ItemDto> {
  if(idItem!== undefined) {
    return this.http.get( this.rootUrl +`/gestock/v1/items/${idItem}`);

  }
  return of();
}


findByCode(codeItem?: string): Observable<ItemDto> {
  if(codeItem!== undefined) {
    return this.http.get( this.rootUrl +`/gestock/v1/items/code/${codeItem}`);

  }
  return of();
}

delete(idItem?: number): Observable<any>  {
  if(idItem!== undefined) {
    return this.http.delete( this.rootUrl +`/gestock/v1/items/delete/${idItem}`);

  }
  return of();
}

}

module Gestockv1itemsService {
}

export { Gestockv1itemsService }

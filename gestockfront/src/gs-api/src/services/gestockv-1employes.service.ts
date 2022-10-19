/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable, Observable as __Observable, of } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EmployeDto } from '../models/employe-dto';
@Injectable({
  providedIn: 'root',
})
class Gestockv1employesService extends __BaseService {
  static readonly findAllPath = '/gestock/v1/employes/all';
  static readonly savePath = '/gestock/v1/employes/create';
  static readonly deletePath = '/gestock/v1/employes/delete/{idEmploye}';
  static readonly updatePath = '/gestock/v1/employes/update';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * permet de chercher et de renvoyer la liste des employes
   * @return Le employe a ete trouve dans la bd
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<EmployeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/employes/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EmployeDto>>;
      })
    );
  }
  /**
   * permet de chercher et de renvoyer la liste des employes
   * @return Le employe a ete trouve dans la bd
   */
  findAll(): __Observable<Array<EmployeDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<EmployeDto>)
    );
  }

  /**
   * permet d'enregistrer ou modifier un employe
   * @param body undefined
   * @return L'objet employe cree
   */
  saveResponse(body?: EmployeDto): __Observable<__StrictHttpResponse<EmployeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestock/v1/employes/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EmployeDto>;
      })
    );
  }
  /**
   * permet d'enregistrer ou modifier un employe
   * @param body undefined
   * @return L'objet employe cree
   */
  save(body?: EmployeDto): __Observable<EmployeDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as EmployeDto)
    );
  }

  /**
   * permet de supprimer  un employe par id
   * @param idEmploye undefined
   */
  deleteResponse(idEmploye: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestock/v1/employes/delete/${idEmploye}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * permet de supprimer  un employe par id
   * @param idEmploye undefined
   */
  delete(idEmploye: number): __Observable<null> {
    return this.deleteResponse(idEmploye).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * permet modifier un employe
   * @param body undefined
   * @return L'objet employe est modifie
   */
  updateResponse(body?: EmployeDto): __Observable<__StrictHttpResponse<EmployeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestock/v1/employes/update`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EmployeDto>;
      })
    );
  }
  /**
   * permet modifier un employe
   * @param body undefined
   * @return L'objet employe est modifie
   */
  update(body?: EmployeDto): __Observable<EmployeDto> {
    return this.updateResponse(body).pipe(
      __map(_r => _r.body as EmployeDto)
    );
  }


  findById(idEmploye?: number): Observable<EmployeDto> {
    if(idEmploye!== undefined) {
      return this.http.get( this.rootUrl +`/gestock/v1/employes/${idEmploye}`);

    }
    return of();
  }

  findByCode(codeEmploye?: string): Observable<EmployeDto> {
    if(codeEmploye!== undefined) {
      return this.http.get( this.rootUrl +`/gestock/v1/employes/code/${codeEmploye}`);

    }
    return of();
  }


}

module Gestockv1employesService {
}

export { Gestockv1employesService }

/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable, Observable as __Observable, of } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategoryDto } from '../models/category-dto';
@Injectable({
  providedIn: 'root',
})
class Gestockv1categoriesService extends __BaseService {
  static readonly findAllPath = '/gestock/v1/categories/all';
  static readonly savePath = '/gestock/v1/categories/create';
  static readonly findByIdPath = '/gestock/v1/categories/{idCategory}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * permet de chercher et de renvoyer la liste des categories
   * @return La categorie a ete trouve dans la bd
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CategoryDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/categories/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }
  /**
   * permet de chercher et de renvoyer la liste des categories
   * @return La categorie a ete trouve dans la bd
   */
  findAll(): __Observable<Array<CategoryDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CategoryDto>)
    );
  }

  /**
   * permet d'enregisdtrer ou modifier une categorie
   * @param body undefined
   * @return L'objet categorie cree
   */
  saveResponse(body?: CategoryDto): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestock/v1/categories/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * permet d'enregisdtrer ou modifier une categorie
   * @param body undefined
   * @return L'objet categorie cree
   */
  save(body?: CategoryDto): __Observable<CategoryDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * permet de chercher  une categorie par id
   * @param idCategory undefined
   * @return La categorie a ete trouve dans la bd
   */
  findByIdResponse(idCategory: number): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/categories/${idCategory}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * permet de chercher  une categorie par id
   * @param idCategory undefined
   * @return La categorie a ete trouve dans la bd
   */
  findById(idCategory: number): __Observable<CategoryDto> {
    return this.findByIdResponse(idCategory).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  delete(idCategory?: number): Observable<any>  {
    if(idCategory!== undefined) {
      return this.http.delete( this.rootUrl +`/gestock/v1/categories/delete/${idCategory}`);
  
    }
    return of();
  }


}

module Gestockv1categoriesService {
}

export { Gestockv1categoriesService }

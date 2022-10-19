/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MvtStkDto } from '../models/mvt-stk-dto';
@Injectable({
  providedIn: 'root',
})
class Gestockv1mvtstkService extends __BaseService {
  static readonly entreeStockPath = '/gestock/v1/mvtstk/entree/';
  static readonly mvtStkItemPath = '/gestock/v1/mvtstk/filter/Item/{idItem}';
  static readonly sortieStockPath = '/gestock/v1/mvtstk/sortie/';
  static readonly stockReelItemPath = '/gestock/v1/mvtstk/stockreel/{idItem}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  entreeStockResponse(): __Observable<__StrictHttpResponse<MvtStkDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestock/v1/mvtstk/entree/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtStkDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  entreeStock(): __Observable<MvtStkDto> {
    return this.entreeStockResponse().pipe(
      __map(_r => _r.body as MvtStkDto)
    );
  }

  /**
   * @param idItem undefined
   * @return successful operation
   */
  mvtStkItemResponse(idItem: number): __Observable<__StrictHttpResponse<Array<MvtStkDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/mvtstk/filter/Item/${idItem}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MvtStkDto>>;
      })
    );
  }
  /**
   * @param idItem undefined
   * @return successful operation
   */
  mvtStkItem(idItem: number): __Observable<Array<MvtStkDto>> {
    return this.mvtStkItemResponse(idItem).pipe(
      __map(_r => _r.body as Array<MvtStkDto>)
    );
  }

  /**
   * @return successful operation
   */
  sortieStockResponse(): __Observable<__StrictHttpResponse<MvtStkDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestock/v1/mvtstk/sortie/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtStkDto>;
      })
    );
  }
  /**
   * @return successful operation
   */
  sortieStock(): __Observable<MvtStkDto> {
    return this.sortieStockResponse().pipe(
      __map(_r => _r.body as MvtStkDto)
    );
  }

  /**
   * @param idItem undefined
   * @return successful operation
   */
  stockReelItemResponse(idItem: number): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/mvtstk/stockreel/${idItem}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * @param idItem undefined
   * @return successful operation
   */
  stockReelItem(idItem: number): __Observable<number> {
    return this.stockReelItemResponse(idItem).pipe(
      __map(_r => _r.body as number)
    );
  }

  findAll(): any{
    return this.http.get('http://localhost:8084/gestock/v1/mvtstk/all');

}


}

module Gestockv1mvtstkService {
}

export { Gestockv1mvtstkService }

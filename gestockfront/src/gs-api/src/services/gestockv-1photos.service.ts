/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class Gestockv1photosService extends __BaseService {
  static readonly savePhotoPath = '/gestock/v1/photos/{id}/{title}/{context}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * permet d'enregisdtrer ou modifier une photo
   * @param params The `Gestockv1photosService.SavePhotoParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `file`:
   *
   * - `context`:
   *
   * @return La photo a ete enregistre
  
  savePhotoResponse(params: Gestockv1photosService.SavePhotoParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.file != null) { __formData.append('file', params.file as string | Blob);}

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestock/v1/photos/${params.id}/${params.title}/${params.context}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }  
  /**
   * permet d'enregisdtrer ou modifier une photo
   * @param params The `Gestockv1photosService.SavePhotoParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `file`:
   *
   * - `context`:
   *
   * @return La photo a ete enregistre
   */

   /**
  savePhoto(params: Gestockv1photosService.SavePhotoParams): __Observable<{}> {
    return this.savePhotoResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  */
}

module Gestockv1photosService {

  /**
   * Parameters for savePhoto
   */
  export interface SavePhotoParams {
    title: string;
    file: Blob;
    context: string;
  }
}

export { Gestockv1photosService }

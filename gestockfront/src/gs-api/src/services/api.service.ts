/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategoryDto } from '../models/category-dto';
import { CommandeEmployeDto } from '../models/commande-employe-dto';
import { LigneCmdEmployeDto } from '../models/ligne-cmd-employe-dto';
import { EmployeDto } from '../models/employe-dto';
import { ItemDto } from '../models/item-dto';
import { MvtStkDto } from '../models/mvt-stk-dto';
import { UtilisateurDto } from '../models/utilisateur-dto';
import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationResquest } from '../models/authentication-resquest';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly findByCodeCategoryPath = '/gestock/v1/categories/code/{codeCategory}';
  static readonly deletePath = '/gestock/v1/categories/delete/{idCategory}';
  static readonly findAllPath = '/gestock/v1/cmdemployes/all';
  static readonly findAllLignesCmdesPath = '/gestock/v1/cmdemployes/allLignesCmde';
  static readonly findByCodeCommandePath = '/gestock/v1/cmdemployes/code/{codeCmd}';
  static readonly savePath = '/gestock/v1/cmdemployes/create';
  static readonly delete_1Path = '/gestock/v1/cmdemployes/delete/{idCmd}';
  static readonly findAllLignesCommandesEmployeByCommandeEmployeIdPath = '/gestock/v1/cmdemployes/lignesCommande/{idCommande}';
  static readonly updateEmployePath = '/gestock/v1/cmdemployes/update/employe/{idCommande}/{idemploye}';
  static readonly updateItemPath = '/gestock/v1/cmdemployes/update/item/{idCommande}/{idLigneCommande}/iditem';
  static readonly findByIdPath = '/gestock/v1/cmdemployes/{idCmd}';
  static readonly findByNomEmployePath = '/gestock/v1/employes/name/{nomEmploye}';
  static readonly findById_1Path = '/gestock/v1/employes/{idEmploye}';
  static readonly findAll_1Path = '/gestock/v1/items/all';
  static readonly findByCodeitemPath = '/gestock/v1/items/code/{codeItem}';
  static readonly delete_2Path = '/gestock/v1/items/delete/{iditem}';
  static readonly findAllItemByIdCategoryPath = '/gestock/v1/items/filter/category/{idCategory}';
  static readonly findById_2Path = '/gestock/v1/items/{idItem}';
  static readonly findAll_2Path = '/gestock/v1/mvtstk/all';
  static readonly correctionStockNegPath = '/gestock/v1/mvtstk/correctionneg/';
  static readonly correctionStockPosPath = '/gestock/v1/mvtstk/correctionpos/';
  static readonly save_1Path = '/gestock/v1/mvtstk/create';
  static readonly delete_3Path = '/gestock/v1/mvtstk/delete/{id}';
  static readonly findByTypePath = '/gestock/v1/mvtstk/filter/{type}';
  static readonly findByItemPath = '/gestock/v1/mvtstk/{id}';
  static readonly changerMotDePassePath = '/gestock/v1/utilisateurs/changermotdepasse';
  static readonly delete_4Path = '/gestock/v1/utilisateurs/delete/{idUtilisateur}';
  static readonly updatePath = '/gestock/v1/utilisateurs/update';
  static readonly authenticatePath = 'gestock/v1/auth/authenticate';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * permet de chercher  une categorie par code
   * @return La categorie a ete trouve dans la bd
  
  findByCodeCategoryResponse(): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/categories/code/${codeCategory}`,
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
   * permet de chercher  une categorie par code
   * @return La categorie a ete trouve dans la bd
   */

   /**
  findByCodeCategory(): __Observable<CategoryDto> {
    return this.findByCodeCategoryResponse().pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  */

  /**
   * permet de supprimer  une categorie par id
   
  deleteResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestock/v1/categories/delete/${idCategory}`,
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
   * permet de supprimer  une categorie par id
   */

    /**
  delete(): __Observable<null> {
    return this.deleteResponse().pipe(
      __map(_r => _r.body as null)
    );
  } */

  /**
   * permet de chercher et de renvoyer la liste des commandes employe
   * @return La commande employe a ete trouve dans la bd
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CommandeEmployeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/cmdemployes/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeEmployeDto>>;
      })
    );
  }
  /**
   * permet de chercher et de renvoyer la liste des commandes employe
   * @return La commande employe a ete trouve dans la bd
   */
  findAll(): __Observable<Array<CommandeEmployeDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CommandeEmployeDto>)
    );
  }

  /**
   * Renvoi la liste de toute les lignes commandes employe
   * @return La commande employe a ete trouve dans la bd
   */
  findAllLignesCmdesResponse(): __Observable<__StrictHttpResponse<Array<LigneCmdEmployeDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/cmdemployes/allLignesCmde`,
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
   * Renvoi la liste de toute les lignes commandes employe
   * @return La commande employe a ete trouve dans la bd
   */
  findAllLignesCmdes(): __Observable<Array<LigneCmdEmployeDto>> {
    return this.findAllLignesCmdesResponse().pipe(
      __map(_r => _r.body as Array<LigneCmdEmployeDto>)
    );
  }

  /**
   * permet de chercher  une commande employe par code
   * @return La Commande employe a ete trouve dans la bd
   
  findByCodeCommandeResponse(): __Observable<__StrictHttpResponse<CommandeEmployeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/cmdemployes/code/${codeCmd}`,
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
   * permet de chercher  une commande employe par code
   * @return La Commande employe a ete trouve dans la bd
   */

   /**
  findByCodeCommande(): __Observable<CommandeEmployeDto> {
    return this.findByCodeCommandeResponse().pipe(
      __map(_r => _r.body as CommandeEmployeDto)
    );
  }  */

  /**
   * permet d'enregisdtrer ou modifier une commande employe
   * @return L'objet commande employe cree
   */
  saveResponse(): __Observable<__StrictHttpResponse<CommandeEmployeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestock/v1/cmdemployes/create`,
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
   * permet d'enregisdtrer ou modifier une commande employe
   * @return L'objet commande employe cree
   */
  save(): __Observable<CommandeEmployeDto> {
    return this.saveResponse().pipe(
      __map(_r => _r.body as CommandeEmployeDto)
    );
  }

  /**
   * permet de supprimer  une commande employe par id

  delete_1Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestock/v1/cmdemployes/delete/${idCmd}`,
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
   * permet de supprimer  une commande employe par id
   */

    /**
  delete_1(): __Observable<null> {
    return this.delete_1Response().pipe(
      __map(_r => _r.body as null)
    );
  }     */

  /**
   * permet de chercher  toutes les lignescommandes d'un employe par lID de sa commande
   * @return Les lignes ont ete trouvee dans la BDD
  
  findAllLignesCommandesEmployeByCommandeEmployeIdResponse(): __Observable<__StrictHttpResponse<LigneCmdEmployeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/cmdemployes/lignesCommande/${idCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LigneCmdEmployeDto>;
      })
    );
  }
  /**
   * permet de chercher  toutes les lignescommandes d'un employe par lID de sa commande
   * @return Les lignes ont ete trouvee dans la BDD
   */

  /**
  findAllLignesCommandesEmployeByCommandeEmployeId(): __Observable<LigneCmdEmployeDto> {
    return this.findAllLignesCommandesEmployeByCommandeEmployeIdResponse().pipe(
      __map(_r => _r.body as LigneCmdEmployeDto)
    );
  }

  */

  /**
   * permet de modifierla commande employe
   * @return L'etat de la commande a ete modifiee
  
  updateEmployeResponse(): __Observable<__StrictHttpResponse<CommandeEmployeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestock/v1/cmdemployes/update/employe/${idCommande}/${idemploye}`,
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
   * permet de modifierla commande employe
   * @return L'etat de la commande a ete modifiee
   */

   /**
  updateEmploye(): __Observable<CommandeEmployeDto> {
    return this.updateEmployeResponse().pipe(
      __map(_r => _r.body as CommandeEmployeDto)
    );
  }   */

  /**
   * permet l'item dans une commande employe
   * @return L'item a ete modifiee
 
  updateItemResponse(): __Observable<__StrictHttpResponse<CommandeEmployeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestock/v1/cmdemployes/update/item/${idCommande}/${idLigneCommande}/iditem`,
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
   * permet l'item dans une commande employe
   * @return L'item a ete modifiee
   */

   /**
  updateItem(): __Observable<CommandeEmployeDto> {
    return this.updateItemResponse().pipe(
      __map(_r => _r.body as CommandeEmployeDto)
    );
  }

  */

  /**
   * permet de chercher  une commande employe par id
   * @return La Commande employe a ete trouve dans la bd

  findByIdResponse(): __Observable<__StrictHttpResponse<CommandeEmployeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/cmdemployes/${idCmd}`,
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
   * permet de chercher  une commande employe par id
   * @return La Commande employe a ete trouve dans la bd
   */


   /**
  findById(): __Observable<CommandeEmployeDto> {
    return this.findByIdResponse().pipe(
      __map(_r => _r.body as CommandeEmployeDto)
    );
  }

  */

  /**
   * permet de chercher  un employe par nom
   * @return Le employe a ete trouve dans la bd
  
  findByNomEmployeResponse(): __Observable<__StrictHttpResponse<EmployeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/employes/name/${nomEmploye}`,
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
   * permet de chercher  un employe par nom
   * @return Le employe a ete trouve dans la bd
   */

    /**
  findByNomEmploye(): __Observable<EmployeDto> {
    return this.findByNomEmployeResponse().pipe(
      __map(_r => _r.body as EmployeDto)
    );
  }


  */
  /**
   * permet de chercher  un employe par id
   * @return Le employe a ete trouve dans la bd
   
  findById_1Response(): __Observable<__StrictHttpResponse<EmployeDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/employes/${idEmploye}`,
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
   * permet de chercher  un employe par id
   * @return Le employe a ete trouve dans la bd
   */

    /**
  findById_1(): __Observable<EmployeDto> {
    return this.findById_1Response().pipe(
      __map(_r => _r.body as EmployeDto)
    );
  }

  */

  /**
   * permet de chercher et renvoyer la liste des items
   * @return la liste des items
   */
  findAll_1Response(): __Observable<__StrictHttpResponse<Array<ItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/items/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ItemDto>>;
      })
    );
  }
  /**
   * permet de chercher et renvoyer la liste des items
   * @return la liste des items
   */
  findAll_1(): __Observable<Array<ItemDto>> {
    return this.findAll_1Response().pipe(
      __map(_r => _r.body as Array<ItemDto>)
    );
  }

  /**
   * permet de chercher  un item par code
   * @return L'item a ete trouve dans la bd
   
  findByCodeitemResponse(): __Observable<__StrictHttpResponse<ItemDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/items/code/${codeItem}`,
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
   * permet de chercher  un item par code
   * @return L'item a ete trouve dans la bd
   */
   /**
  findByCodeitem(): __Observable<ItemDto> {
    return this.findByCodeitemResponse().pipe(
      __map(_r => _r.body as ItemDto)
    );
  }

  */

  /**
   * permet de supprimer  un item par id
 
  delete_2Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestock/v1/items/delete/${iditem}`,
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
   * permet de supprimer  un item par id
   */
  /**
  delete_2(): __Observable<null> {
    return this.delete_2Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  */

  /**
   * "Renvoi les items filtre par category
   * @return item par category vente
  
  findAllItemByIdCategoryResponse(): __Observable<__StrictHttpResponse<Array<ItemDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/items/filter/category/${idCategory}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ItemDto>>;
      })
    );
  }
  /**
   * "Renvoi les items filtre par category
   * @return item par category vente
   */

  /**
  findAllItemByIdCategory(): __Observable<Array<ItemDto>> {
    return this.findAllItemByIdCategoryResponse().pipe(
      __map(_r => _r.body as Array<ItemDto>)
    );
  }

  */

  /**
   * permet de chercher  un item par id
   * @return L'item a ete trouve dans la bd
  
  findById_2Response(): __Observable<__StrictHttpResponse<ItemDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/items/${idItem}`,
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
   * permet de chercher  un item par id
   * @return L'item a ete trouve dans la bd
   */

   /**
  findById_2(): __Observable<ItemDto> {
    return this.findById_2Response().pipe(
      __map(_r => _r.body as ItemDto)
    );
  }

  */

  /**
   * permet de chercher  et revoyer le liste des mvt de stock
   * @return Le  mvt de stock a ete trouve dans la bd
   
  findAll_2Response(): __Observable<__StrictHttpResponse<Array<MvtStkDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/mvtstk/all`,
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
   * permet de chercher  et revoyer le liste des mvt de stock
   * @return Le  mvt de stock a ete trouve dans la bd
   */

   /**
  findAll_2(): __Observable<Array<MvtStkDto>> {
    return this.findAll_2Response().pipe(
      __map(_r => _r.body as Array<MvtStkDto>)
    );
  }

  */

  /**
   * @return successful operation
   */
  correctionStockNegResponse(): __Observable<__StrictHttpResponse<MvtStkDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestock/v1/mvtstk/correctionneg/`,
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
  correctionStockNeg(): __Observable<MvtStkDto> {
    return this.correctionStockNegResponse().pipe(
      __map(_r => _r.body as MvtStkDto)
    );
  }

  /**
   * @return successful operation
   */
  correctionStockPosResponse(): __Observable<__StrictHttpResponse<MvtStkDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestock/v1/mvtstk/correctionpos/`,
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
  correctionStockPos(): __Observable<MvtStkDto> {
    return this.correctionStockPosResponse().pipe(
      __map(_r => _r.body as MvtStkDto)
    );
  }

  /**
   * permet d'enregisdtrer ou modifier un mvt de stock
   * @return L'objet un mvt de stock cree
   */
  save_1Response(): __Observable<__StrictHttpResponse<MvtStkDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestock/v1/mvtstk/create`,
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
   * permet d'enregisdtrer ou modifier un mvt de stock
   * @return L'objet un mvt de stock cree
   */
  save_1(): __Observable<MvtStkDto> {
    return this.save_1Response().pipe(
      __map(_r => _r.body as MvtStkDto)
    );
  }

  /**
   * permet de supprimer  un mvt de stock par id
   
  delete_3Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/mvtstk/delete/${id}`,
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
   * permet de supprimer  un mvt de stock par id
   */

    /**
  delete_3(): __Observable<null> {
    return this.delete_3Response().pipe(
      __map(_r => _r.body as null)
    );
  }  */

  /**
   * permet de chercher  un mvt de stock par type
   * @return Le  mvt de stock a ete trouve dans la bd
  
  findByTypeResponse(): __Observable<__StrictHttpResponse<Array<MvtStkDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/mvtstk/filter/${type}`,
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
   * permet de chercher  un mvt de stock par type
   * @return Le  mvt de stock a ete trouve dans la bd
   */

   /**
  findByType(): __Observable<Array<MvtStkDto>> {
    return this.findByTypeResponse().pipe(
      __map(_r => _r.body as Array<MvtStkDto>)
    );
  }

  */

  /**
   * permet de chercher  un mvt de stock par Item
   * @return Le  mvt de stock a ete trouve dans la bd
 
  findByItemResponse(): __Observable<__StrictHttpResponse<Array<MvtStkDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/mvtstk/${id}`,
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
   * permet de chercher  un mvt de stock par Item
   * @return Le  mvt de stock a ete trouve dans la bd
   */

   /**
  findByItem(): __Observable<Array<MvtStkDto>> {
    return this.findByItemResponse().pipe(
      __map(_r => _r.body as Array<MvtStkDto>)
    );
  }

  */

  /**
   * permet de modifier le mot de passe d'un utilisateur
   * @return Mot de passe modifie
   */
  changerMotDePasseResponse(): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestock/v1/utilisateurs/changermotdepasse`,
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
   * permet de modifier le mot de passe d'un utilisateur
   * @return Mot de passe modifie
   */
  changerMotDePasse(): __Observable<UtilisateurDto> {
    return this.changerMotDePasseResponse().pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * permet de supprimer  un utilisateur par id
  
  delete_4Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestock/v1/utilisateurs/delete/${idUtilisateur}`,
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
   * permet de supprimer  un utilisateur par id
   */

  /**
  delete_4(): __Observable<null> {
    return this.delete_4Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  */

  /**
   * permet modifier un utilisateur
   * @return L'objet utilisateur est modifie
   */
  updateResponse(): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestock/v1/utilisateurs/update`,
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
   * permet modifier un utilisateur
   * @return L'objet utilisateur est modifie
   */
  update(): __Observable<UtilisateurDto> {
    return this.updateResponse().pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  authenticateResponse(body?: AuthenticationResquest): __Observable<__StrictHttpResponse<AuthenticationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `gestock/v1/auth/authenticate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  authenticate(body?: AuthenticationResquest): __Observable<AuthenticationResponse> {
    return this.authenticateResponse(body).pipe(
      __map(_r => _r.body as AuthenticationResponse)
    );
  }
}

module ApiService {
}

export { ApiService }

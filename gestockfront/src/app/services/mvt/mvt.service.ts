import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MvtStkDto } from 'src/gs-api/src/models';
import { Gestockv1mvtstkService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class MvtService {

  constructor(private mvt: Gestockv1mvtstkService) { }

  findAll(): Observable<MvtStkDto[]> {
    return this.mvt.findAll();
  }

  findEntreeStock(): Observable<MvtStkDto> {
    return this.mvt.entreeStock();
  }

  findSortieStock(): Observable<MvtStkDto> {
    return this.mvt.sortieStock();
  }

  findStockReel(iditem: number): Observable<any> {
    return this.mvt.stockReelItem(iditem);
  }


}

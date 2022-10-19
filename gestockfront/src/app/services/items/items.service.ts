import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemDto } from 'src/gs-api/src/models';
import { Gestockv1itemsService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private items: Gestockv1itemsService) { }

  saveItem(itemDto: ItemDto): Observable<any> {
    
    return this.items.save(itemDto);
  }

  findAll(): Observable<ItemDto[]> {
    return this.items.findAll();
  }

  findById(iditem: number): Observable<ItemDto> {
    return this.items.findById(iditem);
  }

  delete(iditem?: number) : Observable<any> {

    return this.items.delete(iditem);

  }


}

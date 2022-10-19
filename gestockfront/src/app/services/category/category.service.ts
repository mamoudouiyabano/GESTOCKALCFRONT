import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDto } from 'src/gs-api/src/models';
import { Gestockv1categoriesService } from 'src/gs-api/src/services';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private category: Gestockv1categoriesService) { }

  
  saveCategory(categoryDto: CategoryDto): Observable<CategoryDto> {
    
    return this.category.save(categoryDto);
  }

  findAll(): Observable<CategoryDto[]> {
    return this.category.findAll();
  }

  findById(idCategory: number): Observable<CategoryDto> {
    return this.category.findById(idCategory);
  }

  delete(idCategory?: number) : Observable<any> {

    return this.category.delete(idCategory);
  }

}

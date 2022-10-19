import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { CategoryService } from 'src/app/services/category/category.service';
import { ItemsService } from 'src/app/services/items/items.service';
import { CategoryDto, ItemDto } from 'src/gs-api/src/models';
import { ErrorDto } from 'src/gs-api/src/models/errorDto';

@Component({
  selector: 'app-page-nouvelitems',
  templateUrl: './page-nouvelitems.component.html',
  styleUrls: ['./page-nouvelitems.component.scss']
})
export class PageNouvelitemsComponent implements OnInit {

  itemDto: ItemDto = {};
  categorieDto: CategoryDto = {};
  listCategories: Array<CategoryDto> = [];
  errorMsg: Array<string> = [];
  errorDto: ErrorDto = {};

  constructor(private router: Router,
    private itemService:ItemsService,
    private activatedroute: ActivatedRoute,
    private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.findAllCategories();

    const idItem = this.activatedroute.snapshot.params['idItem'];
    if(idItem) {
      console.log('checking');
      this.itemService.findById(idItem)
      .subscribe( items => {
        this.itemDto = items;
        this.categorieDto = this.itemDto.category? this.itemDto.category: {};
      });
    }
  }

  findAllCategories(): void {
    this.categoryService.findAll()
    .subscribe( categories => {
      this.listCategories = categories;
    });
  }

  saveItem(): void {
    this.itemDto.category = this.categorieDto;
 
    this.itemService.saveItem(this.itemDto)
    .subscribe( (art) => {
   
      if(art.id != null) {
        this.router.navigate(['items'])

      }  
      else {
        this.errorDto = art
      }
    });
  }

  back(): void {
    this.router.navigate(['items']);
  }

}

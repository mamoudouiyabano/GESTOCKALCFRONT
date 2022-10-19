import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { CategoryDto } from 'src/gs-api/src/models';
import { ErrorDto } from 'src/gs-api/src/models/errorDto';

@Component({
  selector: 'app-page-nouvelcategory',
  templateUrl: './page-nouvelcategory.component.html',
  styleUrls: ['./page-nouvelcategory.component.scss']
})
export class PageNouvelcategoryComponent implements OnInit {

  categoryDto: CategoryDto = {};
  errorMsg: any = {};
  errorDto: ErrorDto = {};


  constructor(private router: Router, private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const idCategory = this.activatedRoute.snapshot.params['idCategory'];
    if(idCategory) {
      this.categoryService.findById(idCategory)
      .subscribe( cat => {
        this.categoryDto = cat;
      });
    }
  }

  back(): void {
    this.router.navigate(['category']);
  }

  saveCategory() {
    this.categoryService.saveCategory(this.categoryDto)
    .subscribe(
      (data) => {
        if(data.id != null) {
          this.router.navigate(['category']);
        }

        else {
          
          this.errorDto = data
          console.log(this.errorDto.errors)
        
        }
      }
    );
  }
}

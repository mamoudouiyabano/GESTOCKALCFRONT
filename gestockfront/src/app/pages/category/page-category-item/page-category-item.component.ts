import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-category-item',
  templateUrl: './page-category-item.component.html',
  styleUrls: ['./page-category-item.component.scss']
})
export class PageCategoryItemComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nouvelCategory(): void {
    this.router.navigate(['nouvelcategory']);
  }

}

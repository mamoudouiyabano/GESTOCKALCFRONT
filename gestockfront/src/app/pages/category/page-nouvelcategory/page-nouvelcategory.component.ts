import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-nouvelcategory',
  templateUrl: './page-nouvelcategory.component.html',
  styleUrls: ['./page-nouvelcategory.component.scss']
})
export class PageNouvelcategoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(): void {
    this.router.navigate(['category']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-nouvelitems',
  templateUrl: './page-nouvelitems.component.html',
  styleUrls: ['./page-nouvelitems.component.scss']
})
export class PageNouvelitemsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(): void {
    this.router.navigate(['items']);
  }

}

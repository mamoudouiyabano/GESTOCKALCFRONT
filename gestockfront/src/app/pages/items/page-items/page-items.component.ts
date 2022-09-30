import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-items',
  templateUrl: './page-items.component.html',
  styleUrls: ['./page-items.component.scss']
})
export class PageItemsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nouvelItem(): void {
    this.router.navigate(['nouvelitem']);
  }


}

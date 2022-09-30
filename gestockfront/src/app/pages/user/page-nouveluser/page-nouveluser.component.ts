import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-nouveluser',
  templateUrl: './page-nouveluser.component.html',
  styleUrls: ['./page-nouveluser.component.scss']
})
export class PageNouveluserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(): void {
    this.router.navigate(['users']);
  }

}

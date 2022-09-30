import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-employe',
  templateUrl: './page-employe.component.html',
  styleUrls: ['./page-employe.component.scss']
})
export class PageEmployeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nouvelEmploye(): void {
    this.router.navigate(['nouvelemploye']);
  }

  transaction(): void {
    this.router.navigate(['transaction']);
  }

}

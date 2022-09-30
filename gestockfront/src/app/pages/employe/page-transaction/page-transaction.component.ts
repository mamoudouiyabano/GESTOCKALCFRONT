import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-transaction',
  templateUrl: './page-transaction.component.html',
  styleUrls: ['./page-transaction.component.scss']
})
export class PageTransactionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  back(): void {
    this.router.navigate(['employes']);
  }
  

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-iventory',
  templateUrl: './page-iventory.component.html',
  styleUrls: ['./page-iventory.component.scss']
})
export class PageIventoryComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  nouvelItem(): void {
    this.router.navigate(['nouvelitem']);
  }

}

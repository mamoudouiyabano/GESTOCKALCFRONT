import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-report',
  templateUrl: './page-report.component.html',
  styleUrls: ['./page-report.component.scss']
})
export class PageReportComponent implements OnInit {

  imgUrls: string [] = ['assets/7.jpg', 'assets/8.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}

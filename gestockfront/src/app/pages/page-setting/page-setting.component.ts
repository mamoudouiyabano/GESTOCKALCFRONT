import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-setting',
  templateUrl: './page-setting.component.html',
  styleUrls: ['./page-setting.component.scss']
})
export class PageSettingComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  back(): void {
    this.route.navigate(['statistiques']);
  }
  

}

import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {
 
   imgUrls: string [] = ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg','assets/4.jpg','assets/5.jpg'];


  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguage(): void {
    this.translate.use('en');
  }

}

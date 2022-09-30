import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentLang: any = '';

  @Input()
  menu!: MenuComponent;

  constructor(private translate: TranslateService, private router:Router) { 

    if(localStorage.getItem('LANG')) {
      this.currentLang = localStorage.getItem('LANG');
     
    } else {
      this.currentLang = 'en';
    }

    
    
  }

  ngOnInit(): void {
  }




  useLanguage(language: string): void {
 
    localStorage.setItem('LANG', language);
    this.changeLanguage(language);
    this.currentLang = localStorage.getItem('LANG');
    console.log(language);
}


@HostListener('changeLanguage')
changeLanguage(language: string): void {

  this.translate.use(language);
  this.menu.loadMenuTitle();
  window.location.reload();

  

}



  


}

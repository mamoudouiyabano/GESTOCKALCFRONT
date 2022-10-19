import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestockfront';
  lang: any  = localStorage.getItem('LANG');
  

  


  constructor(private translate: TranslateService) {

    //this.lang = localStorage.setItem('LANG', 'en');
    translate.setDefaultLang('en');
    if(localStorage.getItem('LANG')) {
      this.lang = localStorage.getItem('LANG');
      console.log(this.lang);
      this.translate.use(this.lang);
      
    }
   
    
   

    
  }

   ngOnInit(): void {
  //   console.log('on init test');
  //   console.log(localStorage.getItem('LANG'));
  //   this.translate.use(this.lang);
   }



  


}

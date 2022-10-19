import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  MenuTile: any = JSON.parse(localStorage.getItem('MenuTiles') as string); 
  currentLang: any = ''; 



  public menuProperties: Array<Menu> = [{
    id:'1',
    titre: this.MenuTile.dashboard,
    icon: 'bi bi-grid-1x2-fill',
    url:'statistiques',

  },
  {
    id:'2',
    titre: this.MenuTile.employee,
    icon: 'fa fa-user',
    url:'employes',

  },

  {
    id:'3',
    titre: this.MenuTile.inventory,
    icon: 'bi bi-card-list',
    url:'inventory',

  },

  {
    id:'4',
    titre: this.MenuTile.items,
    icon: 'fa fa-cube',
    url:'items',

  },

  {
    id:'8',
    titre: this.MenuTile.category,
    icon: 'fa fa-cogs',
    url:'category',

  },


  {
    id:'5',
    titre: this.MenuTile.report,
    icon: 'bi bi-calendar2-range',
    url:'report',

  },
  {
    id:'6',
    titre: this.MenuTile.user,
    icon: 'fa fa-users',
    url:'users',

  },
  {
    id:'7',
    titre: this.MenuTile.setting,
    icon: 'fa fa-cog',
    url:'setting',

  }

]

  constructor(private router: Router, private translate: TranslateService) {
    
    this.loadMenuTitle();
       
  }

  ngOnInit(): void {


  }

  navigate(url?: string): void {
    this.router.navigate([url]);
   }

   loadMenuTitle(): void {

      this.translate.get('component-menu').subscribe((res: string) => {
      localStorage.setItem('MenuTiles',JSON.stringify(res));

      if (localStorage.getItem('MenuTiles')) {
        this.MenuTile = JSON.parse(localStorage.getItem('MenuTiles') as string);
        this.menuProperties;
        
        
        
       }

      
   } );

  }

  testF(): void {
    console.log('ceci est un test');
    
  }

  
  logout(): void {
    localStorage.removeItem('accessToken');
    window.location.reload();
    console.log('deconnexion');
    
  }

  

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { PageCategoryItemComponent } from './pages/category/page-category-item/page-category-item.component';
import { PageNouvelcategoryComponent } from './pages/category/page-nouvelcategory/page-nouvelcategory.component';
import { NouvelEmployeComponent } from './pages/employe/nouvel-employe/nouvel-employe.component';
import { PageEmployeComponent } from './pages/employe/page-employe/page-employe.component';
import { PageTransactionComponent } from './pages/employe/page-transaction/page-transaction.component';
import { PageItemsComponent } from './pages/items/page-items/page-items.component';
import { PageNouvelitemsComponent } from './pages/items/page-nouvelitems/page-nouvelitems.component';
import { LoginComponent } from './pages/login/login/login.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageIventoryComponent } from './pages/page-iventory/page-iventory.component';
import { PageReportComponent } from './pages/page-report/page-report.component';
import { PageSettingComponent } from './pages/page-setting/page-setting.component';
import { PageNouveluserComponent } from './pages/user/page-nouveluser/page-nouveluser.component';
import { PageUserComponent } from './pages/user/page-user/page-user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    component:PageDashboardComponent,
  
    children: [

      {
        path: 'statistiques',
        component: StatistiqueComponent,
       
      },
      {
        path: 'menu',
        component: MenuComponent,
       
      },
      {
        path: 'employes',
        component: PageEmployeComponent,
       
      },
      {
        path: 'nouvelemploye',
        component: NouvelEmployeComponent,
       
      },
      {
        path: 'transaction',
        component: PageTransactionComponent,
       
      },
      {
        path: 'inventory',
        component: PageIventoryComponent,
       
      },
      {
        path: 'items',
        component: PageItemsComponent,
       
      },
      {
        path: 'category',
        component: PageCategoryItemComponent,
       
      },
      {
        path: 'nouvelcategory',
        component: PageNouvelcategoryComponent,
       
      },
      {
        path: 'nouvelitem',
        component: PageNouvelitemsComponent,
       
      },
      {
        path: 'report',
        component: PageReportComponent,
       
      },
      {
        path: 'users',
        component: PageUserComponent,
       
      },
      {
        path: 'nouveluser',
        component: PageNouveluserComponent,
       
      },
      {
        path: 'setting',
        component: PageSettingComponent,
       
      },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { GuardService } from './services/guard/guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    component:PageDashboardComponent,
    canActivate: [GuardService],
  
    children: [

      {
        path: 'statistiques',
        component: StatistiqueComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'menu',
        component: MenuComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'employes',
        component: PageEmployeComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'nouvelemploye',
        component: NouvelEmployeComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'nouvelemploye/:idEmploye',
        component: NouvelEmployeComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'transaction',
        component: PageTransactionComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'inventory',
        component: PageIventoryComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'items',
        component: PageItemsComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'category',
        component: PageCategoryItemComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'nouvelcategory',
        component: PageNouvelcategoryComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'nouvelcategory/:idCategory',
        component: PageNouvelcategoryComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'nouvelitem',
        component: PageNouvelitemsComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'nouvelitem/:idItem',
        component: PageNouvelitemsComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'report',
        component: PageReportComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'users',
        component: PageUserComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'nouveluser',
        component: PageNouveluserComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'nouveluser/:idUtilisateur',
        component: PageNouveluserComponent,
        canActivate: [GuardService],
       
      },
      {
        path: 'setting',
        component: PageSettingComponent,
        canActivate: [GuardService],
       
      },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

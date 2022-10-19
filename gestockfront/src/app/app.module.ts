import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login/login.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { StatistiqueComponent } from './components/statistique/statistique.component';
import { PageEmployeComponent } from './pages/employe/page-employe/page-employe.component';
import { NouvelEmployeComponent } from './pages/employe/nouvel-employe/nouvel-employe.component';
import { BouttonActionComponent } from './components/boutton-action/boutton-action.component';
import { PageTransactionComponent } from './pages/employe/page-transaction/page-transaction.component';
import { PageIventoryComponent } from './pages/page-iventory/page-iventory.component';
import { PageItemsComponent } from './pages/items/page-items/page-items.component';
import { PageNouvelitemsComponent } from './pages/items/page-nouvelitems/page-nouvelitems.component';
import { PageReportComponent } from './pages/page-report/page-report.component';
import { PageUserComponent } from './pages/user/page-user/page-user.component';
import { PageNouveluserComponent } from './pages/user/page-nouveluser/page-nouveluser.component';
import { PageSettingComponent } from './pages/page-setting/page-setting.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { PageCategoryItemComponent } from './pages/category/page-category-item/page-category-item.component';
import { PageNouvelcategoryComponent } from './pages/category/page-nouvelcategory/page-nouvelcategory.component';
import { FormsModule } from '@angular/forms';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { DataTablesModule } from 'angular-datatables';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageDashboardComponent,
    HeaderComponent,
    MenuComponent,
    StatistiqueComponent,
    PageEmployeComponent,
    NouvelEmployeComponent,
    BouttonActionComponent,
    PageTransactionComponent,
    PageIventoryComponent,
    PageItemsComponent,
    PageNouvelitemsComponent,
    PageReportComponent,
    PageUserComponent,
    PageNouveluserComponent,
    PageSettingComponent,
    PageCategoryItemComponent,
    PageNouvelcategoryComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    NgxPaginationModule,
   

           // ngx-translate and the loader module
     HttpClientModule,
     
        // ngx-translate and the loader module
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

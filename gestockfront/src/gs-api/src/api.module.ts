/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { Gestockv1categoriesService } from './services/gestockv-1categories.service';
import { ApiService } from './services/api.service';
import { Gestockv1cmdemployesService } from './services/gestockv-1cmdemployes.service';
import { Gestockv1employesService } from './services/gestockv-1employes.service';
import { Gestockv1itemsService } from './services/gestockv-1items.service';
import { Gestockv1mvtstkService } from './services/gestockv-1mvtstk.service';
import { Gestockv1photosService } from './services/gestockv-1photos.service';
import { Gestockv1utilisateursService } from './services/gestockv-1utilisateurs.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    Gestockv1categoriesService,
    ApiService,
    Gestockv1cmdemployesService,
    Gestockv1employesService,
    Gestockv1itemsService,
    Gestockv1mvtstkService,
    Gestockv1photosService,
    Gestockv1utilisateursService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}

//import { BaseComponent } from './componentes/base/base.component';
//import { Base2Component } from './componentes/base2/base2.component';
//import { TokenerrorComponent } from './componentes/tokenerror/tokenerror.component';
//import { AuthService } from "./servicios/secure/auth.service";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MockupMainComponent } from './mockup-main/mockup-main.component';
import { MockupHeaderComponent } from './mockup-header/mockup-header.component';
// importar componente

const appRoutes: Routes = [
      { path: '', component: MockupMainComponent },
      //{ path: 'base', component: BaseComponent, canActivate: [AuthService] },
      //{ path: 'base2', component: Base2Component, canActivate: [AuthService] },
      //{ path: 'tokenerror', component: TokenerrorComponent },

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(
      appRoutes, {
            useHash: Boolean(history.pushState) === false
      });


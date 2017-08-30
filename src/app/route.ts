import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ListComponent} from './pagination/list/list.component';
/*import {DashboardComponent} from './dashboard/dashboard.component';
import {AboutComponent} from './about/about.component';
import {PolicyComponent} from './policy/policy.component';
import {ProductComponent} from './product/product.component';*/

export const Route: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'list',  component: ListComponent },
  /*{ path: 'dashboard',  component: DashboardComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'policy',  component: PolicyComponent },
  { path: 'product',  component: ProductComponent },
  { path: 'product/:id',  component: ProductComponent }*/
];

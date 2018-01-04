import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './components/views/home/home.component';
import {ShoppingComponent} from './components/views/shopping/shopping.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: "home"
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'shopping-car',
    component: ShoppingComponent,
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

export const routedComponents = [HomeComponent, ShoppingComponent];

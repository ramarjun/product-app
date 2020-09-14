import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { ProductsComponent } from './products/products.component'

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'shop', component: AppComponent },
  { path: 'magazines', component: AppComponent },
  { path: 'products/:id', component: ProductDetailsComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

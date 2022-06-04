import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Mainportal/products/products.component';
import { ViewCardComponent } from './Mainportal/view-card/view-card.component';

const routes: Routes = [
  {path:'', component:ProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'view-card', component:ViewCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './modules/e-shop/detail/detail.component';
import { MainPageComponent } from './modules/e-shop/main-page/main-page.component';
import { EditProductComponent } from './modules/product/components/edit-product/edit-product.component';
import { ListProductComponent } from './modules/product/components/list-product/list-product.component';

const routes: Routes = [
  {
    path: '', 
    component: ListProductComponent
  },
  {
    path: 'edit-product', 
    component: EditProductComponent
  },
  {
    path: 'edit-product/:id', 
    component: EditProductComponent
  },
  {
    path: 'e-shop', 
    component: MainPageComponent
  },
  {
    path: 'detail-product/:id', 
    component: DetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

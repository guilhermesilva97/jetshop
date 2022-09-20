import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListProductComponent } from './components/list-product/list-product.component';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { FormsModule } from '@angular/forms';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

@NgModule({
  declarations: [
    ListProductComponent,
    TableProductsComponent,
    CardProductsComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    ListProductComponent,
    TableProductsComponent,
    CardProductsComponent,
    EditProductComponent
  ]
})
export class ProductModule { }

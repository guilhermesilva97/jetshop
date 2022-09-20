import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[];
  productsFilter: Product[];

  searchFilterForm = this.fb.group({
    labelSearch: [''],
  });
  
  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.eventFilter();
  }

   
  getProducts() {
    this.productService.getProducts().subscribe((res: Product[]) => {
       this.products = res;
       this.productsFilter = res;
   });
 
   }
 
   eventFilter() {
     this.searchFilterForm.get("labelSearch")?.valueChanges.subscribe(value=> {
       this.productsFilter = this.products
       .filter(x=> x.name.toLocaleLowerCase().includes(
         value.toLocaleLowerCase()
       ));
     });
   }
}

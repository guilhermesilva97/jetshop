import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/models/product.model';
import { ProductService } from '../../product/service/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(val => {
      if (val) {
        this.products = val.filter(x=> x.status == true);
      }
    });
  }
}

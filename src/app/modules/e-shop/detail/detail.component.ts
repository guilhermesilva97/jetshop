import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product/models/product.model';
import { ProductService } from '../../product/service/product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product: Product;
  idProduct: string;
  quantity = 1;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    this.route.params.subscribe(val => {
      if (val) {
        this.idProduct = val['id'];
        this.searchProduct();
      }
    })
  }

  sumQuantity() {
    this.quantity = this.quantity + 1;
  }

  subQuantity() {
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1;
    }
  }

  searchProduct() {
    this.productService.get(this.idProduct).subscribe(val => {
      if (val) {
        this.product = val;
      }
    });
  }

}

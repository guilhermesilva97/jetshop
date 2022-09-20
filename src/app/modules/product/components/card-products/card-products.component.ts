import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.css']
})
export class CardProductsComponent implements OnInit {

  @Input() productDetail : Product;
  routeEdit = "";

  constructor() { }

  ngOnInit(): void {
    this.routeEdit = "../edit-product/" + this.productDetail.id+"";
  }

}

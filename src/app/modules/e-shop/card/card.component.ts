import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product: Product;
  routerDetail = "";

  constructor() { }

  ngOnInit(): void {
    this.routerDetail = "../detail-product/"+ this.product.id;
  }

}

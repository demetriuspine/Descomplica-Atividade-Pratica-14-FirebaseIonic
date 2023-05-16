import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { IProduct } from '../models/product.interface';
import { SnapshotAction } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.page.html',
  styleUrls: ['./list-products.page.scss'],
})
export class ListProductsPage implements OnInit {

  products?: Observable<SnapshotAction<IProduct>[]>;

  constructor(private aptService: ProductService,
    private router: Router,) { }

  navigateToProduct(productSnapshot: any) {
    const productId = productSnapshot.payload.key;
    this.router.navigateByUrl(`products/${productId}`);
  }

  ngOnInit(): void {
    const res = this.aptService.getProductList();
    this.products = res;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  product: any; // Altere para o tipo correto do seu objeto de produto

  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }

  getProductDetails(productId: string): void {
    this.productService.getProduct(productId).subscribe(product => {
      this.product = product;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.getProductDetails(productId);
    });
  }

}

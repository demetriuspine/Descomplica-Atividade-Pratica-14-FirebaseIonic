import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  isLoading = true;
  productFound = false;
  product: any;
  productForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required]
  });
  isUpdating = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    public fb: FormBuilder) { }

  getProductDetails(productId: string): void {
    this.productService.getProduct(productId).subscribe(product => {
      this.isLoading = false;
      if (product) {
        this.product = product;
      } else {
        this.productFound = true;
      }
    });
  }

  updateProduct() {
    const productId = this.route.snapshot.params['id'];
    this.productService.updateProduct(productId, this.productForm.value)
      .then(() => {
        this.isUpdating = false;
        this.router.navigateByUrl(`/products/${productId}`);
      })
      .catch(error => {
        console.error('Error updating product:', error);
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.getProductDetails(productId);
    });
  }

}
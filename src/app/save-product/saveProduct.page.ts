import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './saveProduct.page.html',
  styleUrls: ['./saveProduct.page.scss'],
})
export class SaveProductPage implements OnInit {

  bookingForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required]
  });

  constructor(
    private aptService: ProductService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  async formSubmit() {
    try {
      if (!this.bookingForm.valid) {
        return false;
      } else {
        const res = await this.aptService.createProduct(this.bookingForm.value);
        console.log(res);
        this.bookingForm.reset();
        this.router.navigate(['/home']);
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }



}

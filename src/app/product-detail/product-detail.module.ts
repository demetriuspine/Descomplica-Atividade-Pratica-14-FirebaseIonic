import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailPageRoutingModule } from './product-detail-routing.module';

import { ProductDetailPage } from './product-detail.page';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProductDetailPage, ConfirmationModalComponent],
  entryComponents: [ConfirmationModalComponent]
})
export class ProductDetailPageModule { }

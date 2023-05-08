import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './saveProduct-routing.module';

import { SaveProductPage } from './saveProduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalPageRoutingModule
  ],
  declarations: [SaveProductPage]
})
export class ModalPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './save-product-routing.module';

import { SaveProductPage } from './save-product.page';
import { SideMenuModule } from '../side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalPageRoutingModule,
    SideMenuModule
  ],
  declarations: [SaveProductPage]
})
export class ModalPageModule { }

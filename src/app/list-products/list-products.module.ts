import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProductsPageRoutingModule } from './list-products-routing.module';

import { ListProductsPage } from './list-products.page';
import { SideMenuModule } from '../side-menu/side-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProductsPageRoutingModule,
    SideMenuModule
  ],
  declarations: [ListProductsPage]
})
export class ListProductsPageModule {}
